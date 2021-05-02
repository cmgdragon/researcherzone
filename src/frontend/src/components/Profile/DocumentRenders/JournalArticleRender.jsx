import React, { useEffect } from 'react';

const JournalArticleRender = ({doc}) => {

    const collapse = ({target}) => target.classList.toggle('show');

    return (
        <div data-article-id={`id-${doc._id}`} data-article-order={doc.order} className={'profile-articles__journalArticle'}>
            <div className="documents__title">{doc.title}</div>
            <div className="documents__journal">{doc.journal}</div>
            <div className="documents__authors">
                {
                    doc.authors.map(({name, surname}, index) => {          
                        return(<React.Fragment key={index}>
                        {index < 3 ? <>
                            <span className="documents__aut-name">{name}</span>
                            <span className="documents__aut-surname">{surname}</span></>
                        : undefined}
                        {index !== 2 && index !== doc.authors.length-1 ? <span>, </span> : undefined}
                        {index > 2 ? <span>, et al.</span> : undefined}
                    </React.Fragment>)
                    })
                }
            </div>
            <p className="documents__abstract collapse" onClick={collapse}>{doc.abstract}</p>
        </div>
    )
}

export default JournalArticleRender;