import React, { useEffect } from 'react';
import JournalArticle from '~/models/JournalArticle.ts';
import AuthorCitator from './AuthorCitator.jsx';

const JournalArticleCitation = ({doc, setShowCitation, setActiveCitation}) => {

    //document = new JournalArticle();
   /* document = {
        ...document,
        ...doc
    }*/
    useEffect(() => {
        console.log(doc)
        document.body.classList.add('show-modal-body');
        document.body.addEventListener('click', closeModal, false);
    }, [])

    const closeModal = () => {
        setShowCitation(false);
        document.body.classList.remove('show-modal-body');
        setActiveCitation(undefined);
        document.body.removeEventListener('click', closeModal, false);
    }

    return (<>
        <button className="close-modal btn-floating red btn-small" onClick={closeModal}><i className="material-icons right">clear</i></button>
        <AuthorCitator authors={doc.authors} /><span> {doc.title}. </span>
        <span>{doc.journal}. </span><span>{doc.publication_year}</span>
        <span>{doc?.volume ? `; ${doc.volume}` : undefined}
            {doc?.issue ? `(${doc.issue})` : undefined}</span>
            <span>{
            doc?.start_page ? `:${doc.start_page}` : undefined }
            {doc?.end_page ? "-"+doc.end_page : undefined}. </span>
        <span>{doc?.doi ? doc.doi : undefined}</span>
    </>)
}

export default JournalArticleCitation;