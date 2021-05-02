import React, { useState } from 'react';
import updateUser from '~/frontend/src/api/updateUser.js';
import ImageHelper from '~/frontend/src/util/imageCrompressor.js';

const Header = ({user}) => {

    const [userInfo, setUserInfo] = useState(user.user);
    const editInfo = { isEditing: false, currentElement: undefined };

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
                <img id="optional_image" src={userInfo.optional_image} className={'col s4 profile-header__image2 responsive-img'} onClick={selectImage} />
                <span id="profile_slot_1" className={'col s8 profile-header__slot'} onClick={editField}>{userInfo.profile_slot_1}</span>
                <span id="profile_slot_2" className={'col s8 profile-header__slot'} onClick={editField}>{userInfo.profile_slot_2}</span>
            </div>
        </div>
        </>
    )
}

export default Header;