import React, { useEffect } from 'react';
import AuthorCitator from './AuthorCitator.jsx';

const BookCitation = ({doc, setShowCitation, setActiveCitation}) => {

    useEffect(() => {
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
        <AuthorCitator authors={doc.authors} /><span> {doc.chapter_title}. </span>
        <span>{doc.title}{doc?.subtitle ? `: ${doc.subtitle}` : undefined}. </span>
        {doc?.edition ? <span>{doc.edition} - ed. </span> : undefined }
        <span>{doc.publication_place}: {doc?.publisher ? `${doc.publisher}; ` : undefined} {doc.publication_year}</span>
        <span>{
            doc?.start_page ? `:${doc.start_page}` : undefined }
            {doc?.end_page ? "-"+doc.end_page : undefined}. </span>
        <span>{doc?.doi ? doc.doi : undefined}</span>
    </>)
}

export default BookCitation;