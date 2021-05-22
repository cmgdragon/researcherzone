import React, { useEffect } from 'react';
import AuthorCitator from './AuthorCitator.jsx';

const ThesisCitation = ({doc, setShowCitation, setActiveCitation}) => {

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
        <AuthorCitator authors={[doc.author]} />
        <span>. {doc.title}{doc?.subtitle ? `: ${doc.subtitle}` : undefined}. </span>
        <span>{doc.university_location}: {doc.university}; {doc.publication_year}. </span>
        <span>{doc?.url ? doc.url : undefined}</span>
    </>)
}

export default ThesisCitation;