import React, { useEffect } from 'react';

const DocumentsModal = ({activeForm, show}) => {

    useEffect(() => {
        if (show) document.querySelector('#documents-modal').classList.add('show-modal');
        else document.querySelector('#documents-modal').classList.remove('show-modal');
    }, [show])

    return (
        <div className={'modal'} id="documents-modal" onClick={event => event.stopPropagation()} style={{marginTop: window.scrollY-100}}>
            {activeForm}
        </div>
    )
}

export default DocumentsModal;