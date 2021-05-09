import React, { useRef, useEffect } from 'react';
import AuthorCitator from '../Citations/AuthorCitator.jsx';

const ConferenceProceedingRender = ({doc}) => {

    const abstract = useRef();
    const collapse = ({target}) => target.classList.toggle('show');
    useEffect(() => {
        if (abstract.current?.clientHeight > 50) abstract.current.classList.add('collapse');
    })

    return (
        <div data-article-id={`id-${doc._id}`} data-article-order={doc.order} className={'profile-articles__journalArticle'}>
            <div className="documents__title">{doc.title}</div>
            <div className="documents__subtitle">Location: {doc.conference_location}</div>
            <div className="documents__authors">
                <AuthorCitator authors={doc.authors} />
            </div>
            { doc?.abstract ?
                <div ref={abstract} className={`documents__abstract`} onClick={collapse}>
                <div className="documents__subtitle">Abstract</div>
                    {doc.abstract}
                </div>
             : undefined}
        </div>
    )
}

export default ConferenceProceedingRender;