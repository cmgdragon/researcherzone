import React, { useEffect } from 'react';
import addDocument from '~/frontend/src/api/addDocument.js';
import updateDocument from '~/frontend/src/api/updateDocument.js';

const FreeDocumentForm = ({current, userInfo, setUserInfo, setShowModal, setActiveForm, categoryId}) => {

    useEffect(() => {
        document.body.classList.add('show-modal-body');

        CKEDITOR.plugins.addExternal('youtube', `${'https://researcher.zone/'}plugins/youtube/plugin.js`);
        CKEDITOR.replace( 'editor' ,  {
            extraPlugins: 'youtube',
            allowedContent: true
        });
        if (current) {
            CKEDITOR.instances.editor1.setData(current.html);
        }
    
    }, []);

    const closeModal = (ask=true) => {
        if (!ask || confirm('Cancel current operation?')) {
            setShowModal(false);
            document.body.classList.remove('show-modal-body');
            setActiveForm(undefined);
        }
    }

    const send = async event => {
        event.preventDefault();
        if (CKEDITOR.instances.editor1.getData() === "") return;
        event.target.disabled = true;
        event.target.firstChild.data = 'Sending...';

        try {

            if (!current) {
                const newDocument = { 
                    can_be_cited: false,
                    category: userInfo.user.categories.find(({id}) => id === categoryId).id,
                    user: userInfo.user.email,
                    type: 'freedocument',
                    html: CKEDITOR.instances.editor1.getData(),
                    order: userInfo.documents.length ?
                    Math.max( ...userInfo.documents.filter(({category}) => category === categoryId).map(({order}) => order) )+1 : 1
                };

                const response = await addDocument(newDocument);
                const { document_id } = await response.json();
                setUserInfo({ user: { ...userInfo.user }, documents: [...userInfo.documents, { ...newDocument, _id: document_id }] });
            } else {

                const updatedDocuments = [ ...userInfo.documents.filter(doc => doc._id !== current._id),
                    {...current, html: CKEDITOR.instances.editor1.getData() }
                ];

                await updateDocument({...current, html: CKEDITOR.instances.editor1.getData() });
                setUserInfo({ user: userInfo.user, documents: updatedDocuments });
            }

            document.body.removeEventListener('click', closeModal, false);
            event.target.disabled = false;
            event.target.firstChild.data = 'Submit';
            closeModal(false);

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="row">
            <span className="modal-label">{current ? 'Edit ' : 'Add new '}FreeDocument</span>
            <button className="close-modal btn-floating red btn-small" onClick={closeModal}><i className="material-icons right">clear</i></button>
            <textarea name="editor" id="editor1" rows="15" cols="80"></textarea>
        <button id="send-form" onClick={send} className="btn waves-effect waves-light blue accent-4" type="submit" name="action"
        >Submit
            <i className="material-icons right">send</i>
        </button>
      </div>
    )
}

export default FreeDocumentForm;