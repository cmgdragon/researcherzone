import React from 'react';

const Footer = ({styles}) => {

    return (
        <footer style={styles}>
            <div className="footer-credits">© Researchezone 2021 – cmgdragon <span role="img">🐲</span></div>
            <a href='https://github.com/cmgdragon/researcherzone' target='_blank' aria-hidden="true"><img src="http://localhost:8000/img/github.png" /></a>
        </footer>
    )
}

export default Footer;