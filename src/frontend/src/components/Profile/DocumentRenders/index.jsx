import React, { useEffect, useState, useRef } from 'react';
import FreeDocumentRender from './FreeDocumentRender.jsx';
import JournalArticleRender from './JournalArticleRender.jsx';

const DocumentRender = ({doc}) => {

    const [document, setDocument] = useState(undefined);
    const node = useRef();
    useEffect(() => {
        switch (doc.type) {
            case 'freedocument':
                setDocument( <FreeDocumentRender doc={doc} /> )
            break;
            case 'journalarticle':
                setDocument( <JournalArticleRender doc={doc} /> )
            break;
        }

    }, [])

    return (
        <div ref={node} className={'profile-articles__document'}>
            {document}
        </div>
    )
}

export default DocumentRender;