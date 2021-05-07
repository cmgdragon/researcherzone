import React, { useEffect } from 'react';

const SocialMediaModal = ({children, show}) => {

    useEffect(() => {
        if (show) document.querySelector('#social-modal').classList.add('show-modal');
        else document.querySelector('#social-modal').classList.remove('show-modal');
    }, [show])

    return (
        <div className={'modal'} id="social-modal" onClick={event => event.stopPropagation()} style={{marginTop: window.scrollY-100}}>
            {children}
        </div>
    )
}

export default SocialMediaModal;