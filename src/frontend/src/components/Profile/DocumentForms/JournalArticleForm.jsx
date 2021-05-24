import React, { useEffect, useState, useRef } from 'react';
import addDocument from '~/frontend/src/api/addDocument.js';
import updateDocument from '~/frontend/src/api/updateDocument.js';
import JournalArticle from '~/models/JournalArticle.ts';

const JournalArticleForm = ({current, userInfo, setUserInfo, setShowModal, setActiveForm, categoryId}) => {

    const [authors, setAuthors] = useState([0]);
    const form = useRef();
    useEffect(() => {
        document.body.classList.add('show-modal-body');
        if (current) { setAuthors([...Array(current.authors.length).keys()]) }
    }, []);

    const closeModal = (ask=true) => {
        if (!ask || confirm('Cancel current operation?')) {
            setShowModal(false);
            document.body.classList.remove('show-modal-body');
            setActiveForm(undefined);
        }
    }

    const createDocumentObject = () => {     
        const document = new JournalArticle();
        //common properties
        if (!current) {
            document.category = userInfo.user.categories.find(({id}) => id === categoryId).id
            document.type = 'journalarticle';
            document.order = userInfo.documents.length ?
            Math.max( ...userInfo.documents.filter(({category}) => category === categoryId).map(({order}) => order) )+1 : 1
        }
        document.can_be_cited = true;
        document.user = userInfo.user.email;
        //custom properties
        document.authors = [...form.current.querySelectorAll('[data-authors]')].map((aut, index) => ({
            name: form.current.querySelector(`#aut-name-${index}`).value,
            surname: form.current.querySelector(`#aut-surname-${index}`).value,
        }));
        document.title = form.current.querySelector(`#title`).value;
        document.journal = form.current.querySelector(`#journal`).value;
        document.volume = +form.current.querySelector(`#volume`).value ?? 0;
        document.issue = +form.current.querySelector(`#issue`).value ?? 0;
        document.abstract = form.current.querySelector(`#abstract`).value ?? '';
        document.start_page = +form.current.querySelector(`#start_page`).value ?? 0;
        document.end_page = +form.current.querySelector(`#end_page`).value ?? 0;
        document.publication_year = +form.current.querySelector(`#publication_year`).value ?? 0;
        document.doi = form.current.querySelector(`#doi`).value ?? '';
        return document;
    }

    const send = async event => {
        event.preventDefault();
        event.target.lastElementChild.disabled = true;
        event.target.lastElementChild.firstChild.data = 'Sending...';

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
            event.target.lastElementChild.disabled = false;
            event.target.lastElementChild.firstChild.data = 'Submit';
            closeModal(false);

        } catch (error) {
            console.error(error);
        }
      
    }

    const addAuthor = () => setAuthors([...authors, Math.max(...authors) + 1]);
    const removeAuthor = id => setAuthors(authors.filter(aut => aut !== id));

    return (
        <div className="row">
          <span className="modal-label">{!current ? 'Add new ' : 'Edit '}journal article</span>
          <button className="close-modal btn-floating red btn-small" onClick={closeModal}><i className="material-icons right">clear</i></button>
        <form className="col s12" onSubmit={send} ref={form}>
          <div className="row">

            <div className="input-field col s12">
              <input id="title" type="text" defaultValue={current?.title} required />
              <label htmlFor="title" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Article title *</label>
            </div>

            <div id="authors">
                { authors.map(aut => {
                    return (
                        <div key={aut} data-authors>
                        <div className="input-field col s6">
                            <input id={`aut-name-${aut}`} type="text" defaultValue={current?.authors[aut]?.name} required />
                            <label htmlFor={`aut-name-${aut}`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>Author name *</label>
                        </div>
                        <div className="input-field col s6">
                            <input id={`aut-surname-${aut}`} type="text" defaultValue={current?.authors[aut]?.surname} required />
                            <label htmlFor={`aut-surname-${aut}`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>Author surname *</label>
                        </div>
                        { aut !== 0 ?
                                <a onClick={() => removeAuthor(aut)} className="button-remove-modal waves-effect waves-light red btn-small"><i className="material-icons right">delete_forever</i></a>
                        : undefined }
                        </div>
                    )
                })
                }
                <a onClick={addAuthor} className="button-add-modal waves-effect waves-light btn-small">Add author <i className="material-icons right">add</i></a>
                </div>
                <div className="input-field col s12">
                    <input id="journal" type="text" defaultValue={current?.journal} required />
                    <label htmlFor="journal" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Journal *</label>
                </div>

                <div className="input-field col s12">
                    <textarea id="abstract" className="materialize-textarea" defaultValue={current?.abstract}></textarea>
                <label htmlFor="abstract" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Abstract</label>
                </div>

                <div className="input-field col s12">
                    <input id="issue" type="number" defaultValue={current?.issue} />
                    <label htmlFor="issue" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Issue</label>
                </div>

                <div className="input-field col s12">
                    <input id="volume" type="number" defaultValue={current?.volume} />
                    <label htmlFor="volume" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Volume</label>
                </div>

                <div className="input-field col s12">
                    <input id="start_page" type="number" defaultValue={current?.start_page} />
                    <label htmlFor="start_page" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Start page</label>
                </div>

                <div className="input-field col s12">
                    <input id="end_page" type="number" defaultValue={current?.end_page} />
                    <label htmlFor="end_page" className="active" onClick={({target}) => target.previousElementSibling.focus()}>End page</label>
                </div>

                <div className="input-field col s12">
                    <input id="publication_year" type="number" defaultValue={current?.publication_year} required />
                    <label htmlFor="publication_year" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Publication year *</label>
                </div>

                <div className="input-field col s12">
                    <input id="doi" type="text" defaultValue={current?.doi} />
                    <label htmlFor="doi" className="active" onClick={({target}) => target.previousElementSibling.focus()}>DOI / URI</label>
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

export default JournalArticleForm;