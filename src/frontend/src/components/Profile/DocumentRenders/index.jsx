import React from 'react';
import FreeDocumentRender from './FreeDocumentRender.jsx';
import JournalArticleRender from './JournalArticleRender.jsx';
import BookRender from './BookRender.jsx';
import BookChapterRender from './BookChapterRender.jsx';
import ConferenceProceedingRender from './ConferenceProceedingRender.jsx';
import ThesisRender from './ThesisRender.jsx';

const DocumentRender = ({doc}) => {

    const switchDocument = () => {
        switch (doc.type) {
            case 'freedocument':
                return <FreeDocumentRender doc={doc} />;
            case 'journalarticle':
                return <JournalArticleRender doc={doc} />;
            case 'book':
                return <BookRender doc={doc} />;
            case 'bookchapter':
                return <BookChapterRender doc={doc} />;
            case 'conferenceproceeding':
                return <ConferenceProceedingRender doc={doc} />;
            case 'thesis':
                return <ThesisRender doc={doc} />;
        }

    }

    const switchBadge = () => {
        switch (doc.type) {
            case 'freedocument':
                return false;
            case 'journalarticle':
                return 'Journal Article';
            case 'book':
                return 'Book';
            case 'bookchapter':
                return 'Book chapter';
            case 'conferenceproceeding':
                return 'Conference proceeding';
            case 'thesis':
                return 'Thesis';
        }

    }

    return (
        <div className={'profile-articles__document'}>
            <div className="profile-article__badge">{switchBadge() ? switchBadge() : undefined}</div>
            {switchDocument()}
        </div>
    )
}

export default DocumentRender;