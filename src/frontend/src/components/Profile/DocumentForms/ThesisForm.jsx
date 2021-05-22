import React, { useEffect, useRef } from 'react';
import addDocument from '~/frontend/src/api/addDocument.js';
import updateDocument from '~/frontend/src/api/updateDocument.js';
import Thesis from '~/models/Thesis.ts';

const ThesisForm = ({current, userInfo, setUserInfo, setShowModal, setActiveForm, categoryId}) => {

    const form = useRef();
    useEffect(() => {
        document.body.classList.add('show-modal-body');
    }, []);

    const closeModal = (ask=true) => {
        if (!ask || confirm('Cancel current operation?')) {
            setShowModal(false);
            document.body.classList.remove('show-modal-body');
            setActiveForm(undefined);
        }
    }

    const getArticleOrder = nodes => {
        if (nodes.length === 0) return 1;
        const orderList = [];
        for (const node of nodes) {
            orderList.push(node.firstElementChild.getAttribute('data-article-order'));
        }
        return Math.max(...orderList) + 1;
    }

    const createDocumentObject = () => {     
        const document = new Thesis();
        //common properties
        if (!current) {
            document.category = userInfo.user.categories.find(({id}) => id === categoryId).id;
            document.type = 'thesis';
            document.order = userInfo.documents.length ?
            Math.max( ...userInfo.documents.filter(({category}) => category === categoryId).map(({order}) => order) )+1 : 1
        }
        document.can_be_cited = true;
        document.user = userInfo.user.email;
        //custom properties
        document.author = { 
            name: form.current.querySelector(`#aut-name`).value, 
            surname: form.current.querySelector(`#aut-surname`).value 
        };
        document.title = form.current.querySelector(`#title`).value ?? '';
        document.subtitle = form.current.querySelector(`#subtitle`).value ?? '';
        document.university = form.current.querySelector(`#university`).value ?? ''
        document.university_place = form.current.querySelector(`#university_place`).value ?? ''
        document.abstract = form.current.querySelector(`#abstract`).value ?? ''
        document.publication_year = +form.current.querySelector(`#publication_year`).value ?? 0;
        document.uri = form.current.querySelector(`#uri`).value ?? ''
        return document;
    }

    const send = async event => {
        event.preventDefault();

        try {

            const newDocument = createDocumentObject();
            if (!current) {
                const response = await addDocument(newDocument);
                const { document_id } = await response.json();
                setUserInfo({ user: { ...userInfo.user }, documents: [...userInfo.documents, { ...newDocument, _id: document_id }] });
            } else {

                const updatedDocuments = [ ...userInfo.documents.filter(doc => doc._id !== current._id),
                    { ...current, ...newDocument,
                     _id: current._id,
                     category: current.category,
                     order: current.order,
                     type: current.type
                    }
                ];
                
                await updateDocument({...newDocument, _id: current._id });
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
          <span className="modal-label">{!current ? 'Add new ' : 'Edit '}Thesis</span>
          <button className="close-modal btn-floating red btn-small" onClick={closeModal}><i className="material-icons right">clear</i></button>
        <form className="col s12" onSubmit={send} ref={form}>
          <div className="row">

            <div className="input-field col s12">
              <input id="title" type="text" defaultValue={current?.title} required />
              <label htmlFor="title" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Title *</label>
            </div>

            <div className="input-field col s12">
              <input id="subtitle" type="text" defaultValue={current?.subtitle} required />
              <label htmlFor="subtitle" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Subtitle *</label>
            </div>

            <div className="input-field col s6">
                <input id={`aut-name`} type="text" defaultValue={current?.author?.name} required />
                <label htmlFor={`aut-name`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>Author name *</label>
            </div>

            <div className="input-field col s6">
                <input id={`aut-surname`} type="text" defaultValue={current?.author?.surname} required />
                <label htmlFor={`aut-surname`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>Author surname *</label>
            </div>

  
                <div className="input-field col s12">
                    <input id="university" type="text" defaultValue={current?.university} required />
                    <label htmlFor="university" className="active" onClick={({target}) => target.previousElementSibling.focus()}>University *</label>
                </div>

                <div className="input-field col s12">
                    <input id="university_place" type="text" defaultValue={current?.university_place} required />
                    <label htmlFor="university_place" className="active" onClick={({target}) => target.previousElementSibling.focus()}>University place *</label>
                </div>

                <div className="input-field col s12">
                    <textarea id="abstract" className="materialize-textarea" defaultValue={current?.abstract}></textarea>
                <label htmlFor="abstract" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Abstract</label>
                </div>

                <div className="input-field col s12">
                    <input id="publication_place" type="text" defaultValue={current?.publication_place} required />
                    <label htmlFor="publication_place" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Publication Place *</label>
                </div>

                <div className="input-field col s12">
                    <input id="publication_year" type="number" defaultValue={current?.publication_year} required />
                    <label htmlFor="publication_year" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Publication year *</label>
                </div>

                <div className="input-field col s12">
                    <input id="uri" type="text" defaultValue={current?.uri} />
                    <label htmlFor="uri" className="active" onClick={({target}) => target.previousElementSibling.focus()}>URI</label>
                </div>
            </div>

        <button id="send-form" className="btn waves-effect waves-light blue accent-4" type="submit" name="action"
        >Submit
            <i className="material-icons right">send</i>
        </button>
        </form>
      </div>
    )
}

export default ThesisForm;