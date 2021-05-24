import React, { useState, useRef } from 'react';
import updateUser from '~/frontend/src/api/updateUser.js';

const SocialMediaForm = ({userInfo, setShowModal, setUserInfo}) => {

    const form = useRef();
    const { social_media } = userInfo.user;
    const [links, setLinks] = useState([...Array(social_media.length ? social_media.length : 1).keys()]);
    const addLink = () => setLinks([...links, Math.max(...links) + 1]);

    const removeLink = id => setLinks(links.filter(link => link !== id));
    const closeModal = (ask=true) => {
        setShowModal(false);
        document.body.classList.remove('show-modal-body');
    }

    const send = async event => {
        event.preventDefault();
        event.target.disabled = true;
        event.target.firstChild.data = 'Sending...';

        const fixURL = url => {
            if (!url.includes('http')) {
                return `http://${url}`;
            } else return url;
        }

        const newSocialMedia = [...form.current.querySelectorAll('[data-social]')].map((link) => ({
            name: link.querySelector(`#link-name-${link.getAttribute('data-social')}`).value,
            url: fixURL(link.querySelector(`#link-url-${link.getAttribute('data-social')}`).value),
        }));

        try {

            await updateUser({...userInfo.user, social_media: newSocialMedia});
            setUserInfo({ ...userInfo, user: {...userInfo.user, social_media: newSocialMedia} });
            event.target.disabled = false;
            event.target.firstChild.data = 'Submit';
            closeModal(false);

        } catch (error) {
            console.error(error);
        }
      
    }

    return (
        <div className="row">
          <span className="modal-label">Edit social media</span>
          <button className="close-modal btn-floating red btn-small" onClick={closeModal}><i className="material-icons right">clear</i></button>
        <form className="col s12" onSubmit={send} ref={form}>
          <div className="row">

            {
                links.map(link => {
                    return (
                        <div key={link} data-social={link}>
                            <div className="input-field col s6">
                                <input id={`link-name-${link}`} type="text" defaultValue={social_media[link]?.name ?? ''} required />
                                <label htmlFor={`link-name-${link}`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>Name</label>
                            </div>

                            <div className="input-field col s6">
                                <input id={`link-url-${link}`} type="text" defaultValue={social_media[link]?.url ?? ''} required />
                                <label htmlFor={`link-url-${link}`} className="active" onClick={({target}) => target.previousElementSibling.focus()}>URL</label>
                            </div>
                            <a onClick={() => removeLink(link)} className="button-remove-modal waves-effect waves-light red btn-small"><i className="material-icons right">delete_forever</i></a>
                        </div>
                    )
                })
            }
            <a onClick={addLink} className="button-add-modal waves-effect waves-light btn-small">Add social link <i className="material-icons right">add</i></a>
          </div>

        <button id="send-form" className="btn waves-effect waves-light blue accent-4" type="submit" name="action"
        >Submit
            <i className="material-icons right">send</i>
        </button>
        </form>
    </div>
    )
}

export default SocialMediaForm;