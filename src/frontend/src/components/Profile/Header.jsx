import React, { useState, useRef } from 'react';
import updateUser from '~/frontend/src/api/updateUser.js';
import ImageHelper from '~/frontend/src/util/imageCrompressor.js';
import SocialMediaModal from '../SocialMediaModal.jsx';

const Header = ({user}) => {

    const [userInfo, setUserInfo] = useState(user.user);
    const [showModal, setShowModal] = useState(false);
    const editInfo = { isEditing: false, currentElement: undefined };
    const social_networks = ['youtube', 'twitter', 'instagram', 'youtube'];

    const selectImage = ({target}) => target.previousElementSibling.click();
    const changeImage = ({target}) => {
        const file = target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async readerEvent => {
            const imageHelper = new ImageHelper();
            const content = readerEvent.target.result;
            const compressedContent = await imageHelper.resizeBase64Image(content);
            target.nextElementSibling.src = compressedContent;
            try {
                const updatedUser = { ...userInfo, [target.id]: compressedContent };
                await updateUser(updatedUser);
                setUserInfo(updatedUser);            
            } catch (error) {
                console.error(error);
            }

        }
    }
    const removeOptionalImage = async () => {
        try {
            const updatedUser = { ...userInfo, optional_image: '' };
            await updateUser(updatedUser);
            setUserInfo(updatedUser);
        } catch (error) {
            console.error(error);
        }
    }
    const editField = event => {
    
        editInfo.currentElement?.classList.remove('updating-field');
        event.target.setAttribute('contenteditable', true);
        event.target.focus();
        
        if (editInfo.currentElement?.innerText !== userInfo[editInfo.currentElement?.id]) {
            document.body.click();
        }

        event.target.classList.add('updating-field');
        editInfo.currentElement = event.target;
        const oldValue = userInfo[event.target.id];
        const fireEvent = async () => {
            event.target.classList.remove('updated-field');
            if (event.target.innerText !== oldValue) {
                try {
                    const updatedUser = { ...userInfo, [event.target.id]: event.target.innerText };
                    await updateUser(updatedUser);
                    setUserInfo(updatedUser);
                    event.target.classList.add('updated-field');
                    setTimeout(() => {
                        event.target.classList.remove('updated-field');
                    }, 500);
                } catch (error) {
                    console.error(error);
                }
            }
            document.body.removeEventListener('click', fireEvent, false);
            event.target.classList.remove('updating-field');
            event.target.setAttribute('contenteditable', false);
            editInfo.isEditing = false;
        }
        
        if (!editInfo.isEditing) document.body.addEventListener('click', fireEvent, false);
        event.stopPropagation();
    }

    return (
        <>
        <div className={'profile-header row'}>
            <input id="image" type="file" name="name" style={{display: 'none'}} accept="image/png, image/jpeg" onChange={changeImage} />
            <img src={userInfo.image} className={'col s4 profile-header__image responsive-img'} onClick={selectImage}  />
            <div className={'col s8 row profile-header__textgroup'}>
                <div className={'col s12'}>
                    <span id="name" className={'col s6 h3 profile-header__name blue-text lighten-2'} onClick={editField}>{userInfo.name}</span>
                    <span id="surname" className={'col s6 h3 profile-header__name blue-text lighten-2'} onClick={editField}>{userInfo.surname}</span>
                </div>
                <input id="optional_image" type="file" name="name" style={{display: 'none'}} accept="image/png, image/jpeg" onChange={changeImage} />
                <div className={'profile-header__optional-image col'}>
                    <img id="optional_image" src={userInfo.optional_image} className={'profile-header__image2 responsive-img'} onClick={selectImage} />
                    <i className="material-icons right">close</i>
                </div>
                <div className={'profile-header__slots col s12'}>
                    <span id="profile_slot_1" className={'col s8 profile-header__slot'} onClick={editField}>{userInfo.profile_slot_1}</span>
                    <span id="profile_slot_2" className={'col s8 profile-header__slot'} onClick={editField}>{userInfo.profile_slot_2}</span>
                </div>
            </div>
        </div>
        <div className="profile__social">
                {
                    userInfo.social_media.map(({name, url}, index) => {
                        const social_name = name.replace(/\s/g, '').replace(/[^\w\s]/gi, '').toLowerCase();
                        let image;
                        for (const network of social_networks) {
                            if (social_name === network || url.includes(network)) {
                                image = network;
                                break;
                            }
                        }
                        return (
                            <a className={`profile__social-link ${image ? '' : 'no-image'}`} key={index} href={url} title={name}>
                                {
                                    image ? <img src={`http://localhost:8000/img/${image}.png`} alt={name} />
                                    : <i className="material-icons right">link</i>
                                }
                            </a>
                        )
                    })
                }
                <div className="btn waves-effect waves-light btn-floating blue btn-small" onClick={() => {document.body.classList.add('show-modal-body'); setShowModal(true)}}>
                    <i className="material-icons right">add</i>
                </div>
            </div>
        <SocialMediaModal show={showModal}>
            <SocialMediaForm userInfo={userInfo} setUserInfo={setUserInfo} setShowModal={setShowModal} />
        </SocialMediaModal>
        </>
    )
}

const SocialMediaForm = ({userInfo, setShowModal, setUserInfo}) => {

    const form = useRef();
    const { social_media } = userInfo;
    const [links, setLinks] = useState([...Array(social_media.length ? social_media.length : 1).keys()]);
    const addLink = () => setLinks([...links, Math.max(...links) + 1]);

    const removeLink = id => setLinks(links.filter(link => link !== id));
    const closeModal = (ask=true) => {
        setShowModal(false);
        document.body.classList.remove('show-modal-body');
    }

    const send = async event => {
        event.preventDefault();

        const newSocialMedia = [...form.current.querySelectorAll('[data-social]')].map((link) => ({
            name: link.querySelector(`#link-name-${link.getAttribute('data-social')}`).value,
            url: link.querySelector(`#link-url-${link.getAttribute('data-social')}`).value,
        }));

        try {

            console.log({...userInfo, social_media: newSocialMedia});
            await updateUser({...userInfo, social_media: newSocialMedia});
            setUserInfo({...userInfo, social_media: newSocialMedia});
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

export default Header;