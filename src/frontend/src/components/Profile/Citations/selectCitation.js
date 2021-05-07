import JournalArticleCitation from './JournalArticleCitation.jsx';
import BookCitation from './BookCitation.jsx';
import BookChapterCitation from './BookChapterCitation.jsx';
import ConferenceProceedingCitation from './ConferenceProceedingCitation.jsx';
import ThesisCitation from './ThesisCitation.jsx';

const selectCitation = type => {
    switch (type) {
        case 'journalarticle':
            return JournalArticleCitation;
        case 'book':
            return BookCitation;
        case 'bookchapter':
            return BookChapterCitation;
        case 'conferenceproceeding':
            return ConferenceProceedingCitation;
        case 'thesis':
            return ThesisCitation;
    }
}

export default selectCitation;