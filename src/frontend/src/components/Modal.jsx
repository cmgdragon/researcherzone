import React, { useEffect } from 'react';

const Modal = ({children, show}) => {

    useEffect(() => {
        if (show) document.querySelector('.modal').classList.add('show-modal');
        else document.querySelector('.modal').classList.remove('show-modal');
    }, [show])

    return (
        <div className={'modal'} onClick={event => event.stopPropagation()} style={{marginTop: window.scrollY-100}}>
            {children}
        </div>
    )
}

export default Modal;