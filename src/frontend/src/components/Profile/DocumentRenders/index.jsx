import React, { useEffect, useState } from 'react';
import FreeDocumentRender from './FreeDocumentRender.jsx';
import JournalArticleRender from './JournalArticleRender.jsx';
import BookRender from './BookRender.jsx';
import BookChapterRender from './BookChapterRender.jsx';
import ConferenceProceedingRender from './ConferenceProceedingRender.jsx';
import ThesisRender from './ThesisRender.jsx';

const DocumentRender = ({doc}) => {

    const [document, setDocument] = useState(undefined);
    const [icon, setIcon] = useState(false);
    useEffect(() => {
        switch (doc.type) {
            case 'freedocument':
                setDocument( <FreeDocumentRender doc={doc} /> );
                setIcon(false);
            break;
            case 'journalarticle':
                setDocument( <JournalArticleRender doc={doc} /> );
                setIcon('Journal Article');
            break;
            case 'book':
                setDocument( <BookRender doc={doc} /> );
                setIcon('Book');
            break;
            case 'bookchapter':
                setDocument( <BookChapterRender doc={doc} /> );
                setIcon('Book chapter');
            break;
            case 'conferenceproceeding':
                setDocument( <ConferenceProceedingRender doc={doc} /> );
                setIcon('Conference proceeding');
            break;
            case 'thesis':
                setDocument( <ThesisRender doc={doc} /> );
                setIcon('Thesis');
            break;
        }

    }, [])

    return (
        <div className={'profile-articles__document'}>
            <div className="profile-article__badge">{icon ? icon : undefined}</div>
            {document}
        </div>
    )
}

export default DocumentRender;