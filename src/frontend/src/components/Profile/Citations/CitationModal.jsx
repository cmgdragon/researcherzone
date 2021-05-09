import React, { useEffect } from 'react';

const CitationModal = ({activeCitation, show}) => {

    useEffect(() => {
        if (show) document.querySelector('#citation-modal').classList.add('show-modal');
        else document.querySelector('#citation-modal').classList.remove('show-modal');
    }, [show])

    return (
        <div className={'modal'} id="citation-modal" onClick={event => event.stopPropagation()}>
            <div className="citation-modal-text">{activeCitation}</div>
        </div>
    )
}

export default CitationModal;