import React, { useEffect, useState } from 'react';

const Footer = ({ dynamic }) => {

    const [styles, setStyle] = useState({ margin: '6rem 0 0 0' });
    useEffect(() => {
        if (dynamic && (window.outerHeight - 150 >= document.getElementById('app').clientHeight)) {
            setStyle({ position: 'fixed', bottom: '0' });
        }
    }, [])

    return (
        <footer style={styles}>
            <div className="footer-credits">© ResearcherZone 2021 – cmgdragon <span role="img">🐲</span></div>
            <a href='https://github.com/cmgdragon/researcherzone' target='_blank' aria-hidden="true"><img src={`${'https://researcher.zone/'}img/github.png`} /></a>
        </footer>
    )
}

export default Footer;