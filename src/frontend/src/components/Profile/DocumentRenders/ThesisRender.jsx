import React, { useRef, useEffect } from 'react';

const ThesisRender = ({doc}) => {

    const abstract = useRef();
    const collapse = ({target}) => target.classList.toggle('show');
    useEffect(() => {
        if (abstract.current?.clientHeight > 50) abstract.current.classList.add('collapse');
    })

    return (
        <div data-article-id={`id-${doc._id}`} data-article-order={doc.order} className={'profile-articles__journalArticle'}>
            <div className="documents__title">{doc.title}</div>
            <div className="documents__subtitle">{doc.subtitle}</div>
            <div className="documents__authors">{doc.author.name} {doc.author.surname}</div>
            { doc?.abstract ?
                <div ref={abstract} className={`documents__abstract`} onClick={collapse}>
                <div className="documents__subtitle">Abstract</div>
                    {doc.abstract}
                </div>
             : undefined}
        </div>
    )
}

export default ThesisRender;