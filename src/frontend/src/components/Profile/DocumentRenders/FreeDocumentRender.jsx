import React, { useEffect } from 'react';

const FreeDocumentRender = ({doc}) => {

    useEffect(() => {
        const node = document.querySelector(`[data-article-id=id-${doc._id}]`);
        node.innerHTML = doc.html;
    });

    return (
        <div data-article-id={`id-${doc._id}`} data-article-order={doc.order}></div>
    )
}

export default FreeDocumentRender;