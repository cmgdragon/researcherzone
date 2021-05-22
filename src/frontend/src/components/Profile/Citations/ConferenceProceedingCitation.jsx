import React, { useEffect } from 'react';
import AuthorCitator from './AuthorCitator.jsx';

const ConferenceProceedingCitation = ({doc, setShowCitation, setActiveCitation}) => {

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
        {doc.editors.length ? <span>In: <AuthorCitator authors={doc.editors} />. </span> : undefined }
        <span>{doc.title}{doc?.subtitle ? `: ${doc.subtitle}` : undefined}; </span>
        <span>{doc.publication_year} {doc?.publication_month ? ` ${doc.publication_month}` : undefined }
              {doc?.publication_day ? ` ${doc.publication_day}` : undefined }
        </span>
        <span>; {doc.conference_location}. </span>
        <span>{doc.publication_place}: {doc?.publisher ? `${doc.publisher}; ` : undefined} {doc.publication_year}</span>
        <span>{
            doc?.start_page ? `:${doc.start_page}` : undefined }
            {doc?.end_page ? "-"+doc.end_page : undefined}. </span>
        <span>{doc?.doi ? doc.doi : undefined}</span>
    </>)
}

export default ConferenceProceedingCitation;