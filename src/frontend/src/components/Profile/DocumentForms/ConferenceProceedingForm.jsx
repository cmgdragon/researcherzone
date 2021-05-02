import React, { useEffect, useState, useRef } from 'react';
import updateDocument from '~/frontend/src/api/updateDocument.js';
import ConferenceProceeding from '~/models/ConferenceProceeding.ts';

const ConferenceProceedingForm = ({current, userInfo, setUserInfo, setShowModal, setActiveForm, categoryNode}) => {

    const [authors, setAuthors] = useState([0]);
    const [editors, setEditors] = useState([0]);
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
        const document = new ConferenceProceeding();
        //common properties
        if (!current) {
            document.category = categoryNode.getAttribute('data-category');
            document.type = 'book';
            document.order = getArticleOrder(categoryNode.querySelectorAll('.profile-articles__document'));
        }
        document.abstract = form.current.querySelector(`#abstract`).value;
        document.can_be_cited = true;
        document.user = userInfo.user.email;
        //custom properties
        document.authors = [...form.current.querySelectorAll('[data-authors]')].map((aut, index) => ({
            name: form.current.querySelector(`#aut-name-${index}`).value,
            surname: form.current.querySelector(`#aut-surname-${index}`).value,
        }));
        document.editors = [...form.current.querySelectorAll('[data-editors]')].map((ed, index) => ({
            name: form.current.querySelector(`#ed-name-${index}`).value,
            surname: form.current.querySelector(`#ed-surname-${index}`).value,
        }));
        document.title = form.current.querySelector(`#title`).value;
        document.subtitle = form.current.querySelector(`#subtitle`).value;
        document.publication_place = +form.current.querySelector(`#publication_place`).value;
        document.publication_year = +form.current.querySelector(`#publication_year`).value;
        document.conference_year = +form.current.querySelector(`#conference_year`).value;
        document.conference_month = +form.current.querySelector(`#conference_month`).value;
        document.conference_day = +form.current.querySelector(`#conference_day`).value;
        document.publisher = form.current.querySelector(`#publisher`).value;
        document.conference_location = +form.current.querySelector(`#conference_location`).value;
        document.doi = form.current.querySelector(`#doi`).value;
        return document;
    }

    const send = async event => {
        event.preventDefault();

        try {

            const newDocument = createDocumentObject();
            console.log({...current, ...newDocument});
            if (!current) {
                console.log(newDocument)
                //const response = await addDocument(newDocument);
                const { document_id } = await response.json();
                console.log({ user: { ...userInfo.user }, documents: [...userInfo.documents, { ...newDocument, _id: document_id }] });
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
                console.log({ user: userInfo.user, documents: updatedDocuments });
                setUserInfo({ user: userInfo.user, documents: updatedDocuments });
            }

            document.body.removeEventListener('click', closeModal, false);
            closeModal(false);

        } catch (error) {
            console.error(error);
        }
      
    }

    const addAuthor = () => setAuthors([...authors, Math.max(...authors) + 1]);
    const removeAuthor = id => setAuthors(authors.filter(aut => aut !== id));

    const addEditor = () => setEditors([...editors, Math.max(...editors) + 1]);
    const removeEditor = id => setEditors(editors.filter(aut => aut !== id));

    return (
        <div className="row">
          <span className="modal-label">{!current ? 'Add new ' : 'Edit '}Conference proceeding</span>
          <button className="close-modal btn-floating red btn-small" onClick={closeModal}><i className="material-icons right">clear</i></button>
        <form className="col s12" onSubmit={send} ref={form}>
          <div className="row">

            <div className="input-field col s12">
              <input id="title" type="text" defaultValue={current?.title} required />
              <label htmlFor="title" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Conference title</label>
            </div>

            <div className="input-field col s12">
              <input id="subtitle" type="text" defaultValue={current?.subtitle} />
              <label htmlFor="subtitle" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Conference subtitle</label>
            </div>

            <div id="authors">
                { authors.map(aut => {
                    return (
                        <div key={aut} data-authors>
                        <div className="input-field col s6">
                            <input id={`aut-name-${aut}`} type="text" defaultValue={current?.authors[aut].name} required />
                            <label htmlFor={`aut-name-${aut}`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>Author name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id={`aut-surname-${aut}`} type="text" defaultValue={current?.authors[aut].surname} required />
                            <label htmlFor={`aut-surname-${aut}`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>Author surname</label>
                        </div>
                        { aut !== 1 ?
                                <span onClick={() => removeAuthor(aut)}>Remove</span>
                        : undefined }
                        </div>
                    )
                })
                }
                <span onClick={addAuthor}>Add author</span>
            </div>
            <div id="editors">
                { editors.map(ed => {
                    return (
                        <div key={ed} data-editors>
                        <div className="input-field col s6">
                            <input id={`ed-name-${ed}`} type="text" defaultValue={current?.editors[ed].name} required />
                            <label htmlFor={`ed-name-${ed}`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>Editor name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id={`ed-surname-${ed}`} type="text" defaultValue={current?.editors[ed].surname} required />
                            <label htmlFor={`ed-surname-${ed}`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>Editor surname</label>
                        </div>
                        { ed !== 1 ?
                                <span onClick={() => removeEditor(ed)}>Remove</span>
                        : undefined }
                        </div>
                    )
                })
                }
                <span onClick={addEditor}>Add editor</span>
            </div>

                <div className="input-field col s12">
                    <textarea id="abstract" className="materialize-textarea" defaultValue={current?.abstract}></textarea>
                <label htmlFor="abstract" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Abstract</label>
                </div>


                <div className="input-field col s12">
                    <input id="conference_place" type="conference_place" defaultValue={current?.conference_place} required />
                    <label htmlFor="conference_place" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Conference place</label>
                </div>
                <div className="input-field col s12">
                    <input id="conference_year" type="conference_year" defaultValue={current?.conference_year} required />
                    <label htmlFor="conference_year" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Conference year</label>
                </div>
                <div className="input-field col s12">
                    <input id="conference_month" type="conference_month" defaultValue={current?.conference_month} required />
                    <label htmlFor="conference_month" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Conference month</label>
                </div>
                <div className="input-field col s12">
                    <input id="conference_day" type="conference_day" defaultValue={current?.conference_day} required />
                    <label htmlFor="conference_day" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Conference day</label>
                </div>


                <div className="input-field col s12">
                    <input id="publisher" type="text" defaultValue={current?.publisher} required />
                    <label htmlFor="publisher" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Publisher</label>
                </div>

                <div className="input-field col s12">
                    <input id="publication_place" type="text" defaultValue={current?.publication_place} required />
                    <label htmlFor="publication_place" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Publication Place</label>
                </div>

                <div className="input-field col s12">
                    <input id="publication_year" type="number" defaultValue={current?.publication_year} required />
                    <label htmlFor="publication_year" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Publication year</label>
                </div>

                <div className="input-field col s12">
                    <input id="doi" type="text" defaultValue={current?.doi} required />
                    <label htmlFor="doi" className="active" onClick={({target}) => target.previousElementSibling.focus()}>DOI / URI</label>
                </div>

        </div>
        <button id="send-form" onClick={send} className="btn waves-effect waves-light blue accent-4" type="submit" name="action"
        >Submit
            <i className="material-icons right">send</i>
        </button>
        </form>
      </div>
    )
}

export default ConferenceProceedingForm;