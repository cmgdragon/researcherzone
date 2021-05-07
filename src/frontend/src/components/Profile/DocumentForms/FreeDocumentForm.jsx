import React, { useEffect, useState } from 'react';
import addDocument from '~/frontend/src/api/addDocument.js';
import updateDocument from '~/frontend/src/api/updateDocument.js';

const FreeDocumentForm = ({current, userInfo, setUserInfo, setShowModal, setActiveForm, categoryId}) => {

    const [editor, setEditor] = useState('');
    useEffect(() => {
        document.body.classList.add('show-modal-body');

        ClassicEditor
			.create( document.querySelector( '#editor' ), {
				
				toolbar: {
					items: [
						'heading',
						'|',
						'bold',
						'italic',
						'link',
						'bulletedList',
						'numberedList',
						'fontColor',
						'fontSize',
						'specialCharacters',
						'|',
						'outdent',
						'indent',
						'|',
						'imageInsert',
						'insertTable',
						'blockQuote',
						'mediaEmbed',
						'undo',
						'redo',
						'htmlEmbed',
						'code',
						'codeBlock'
					]
				},
				language: 'en',
				image: {
					toolbar: [
						'imageTextAlternative',
						'imageStyle:full',
						'imageStyle:side'
					]
				},
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells'
					]
				},
				licenseKey: '',
				
				
			} )
			.then( editor => {
				window.editor = editor;
		
                setEditor(editor);
                if (current) {
                    editor.setData(current.html);
                }
			
			} )
			.catch( error => {
				console.error( 'Oops, something went wrong!' );
				console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
				console.warn( 'Build id: quv3rfo3pxrj-vm52prjvm8zk' );
				console.error( error );
			} );
    
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
        if (editor.getData() === "") return;

        try {

            if (!current) {
                const newDocument = { 
                    can_be_cited: false,
                    category: userInfo.user.categories.find(({id}) => id === categoryId).id,
                    user: userInfo.user.email,
                    type: 'freedocument',
                    html: editor.getData(),
                    order: userInfo.documents.length ?
                    Math.max( ...userInfo.documents.filter(({category}) => category === categoryId).map(({order}) => order) )+1 : 1
                };
    
                const response = await addDocument(newDocument);
                const { document_id } = await response.json();
                console.log({ user: { ...userInfo.user }, documents: [...userInfo.documents, { ...newDocument, _id: document_id }] });
                setUserInfo({ user: { ...userInfo.user }, documents: [...userInfo.documents, { ...newDocument, _id: document_id }] });
            } else {

                const updatedDocuments = [ ...userInfo.documents.filter(doc => doc._id !== current._id),
                    {...current, html: editor.getData() }
                ];

                await updateDocument({...current, html: editor.getData() });
                console.log({ user: userInfo.user, documents: updatedDocuments });
                setUserInfo({ user: userInfo.user, documents: updatedDocuments });
            }

            document.body.removeEventListener('click', closeModal, false);
            closeModal(false);

        } catch (error) {
            console.error(error);
        }
      
    }

    return (
        <div className="row">
            <span className="modal-label">{current ? 'Edit ' : 'Add new '}FreeDocument</span>
            <button className="close-modal btn-floating red btn-small" onClick={closeModal}><i className="material-icons right">clear</i></button>
            <div id="editor"></div>
        <button id="send-form" onClick={send} className="btn waves-effect waves-light blue accent-4" type="submit" name="action"
        >Submit
            <i className="material-icons right">send</i>
        </button>
      </div>
    )
}

export default FreeDocumentForm;