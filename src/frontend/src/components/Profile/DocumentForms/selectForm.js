import FreeDocumentForm from './FreeDocumentForm.jsx';
import BookForm from './BookForm.jsx'
import JournalArticleForm from './JournalArticleForm.jsx';
import BookChapterForm from './BookChapterForm.jsx';
import ConferenceProceedingForm from './ConferenceProceedingForm.jsx';
import ThesisForm from './ThesisForm.jsx';

const selectForm = type => {
    switch (type) {
        case 'freedocument':
            return FreeDocumentForm;
        case 'journalarticle':
            return JournalArticleForm;
        case 'book':
            return BookForm;
        case 'bookchapter':
            return BookChapterForm;
        case 'conferenceproceeding':
            return ConferenceProceedingForm;
        case 'thesis':
            return ThesisForm;
    }
}

export default selectForm;