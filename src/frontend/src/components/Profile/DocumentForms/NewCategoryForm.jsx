import React, { useEffect, useRef } from 'react';
import updateUser from '~/frontend/src/api/updateUser.js';

const NewCategoryForm = ({current, userInfo, setUserInfo, setShowModal, setActiveForm}) => {

    const form = useRef(undefined);
    useEffect(() => {
        document.body.classList.add('show-modal-body');
        document.body.addEventListener('click', closeModal, false);
        if (current) form.current.getElementsByTagName('input')[0].value = current.category_name;

    }, []);

    const closeModal = () => {
        setShowModal(false);
        document.body.classList.remove('show-modal-body');
        setActiveForm(undefined);
        document.body.removeEventListener('click', closeModal, false);
    }

    const send = async (event) => {
        event.preventDefault();        
        event.target.disabled = true;
        event.target.firstChild.data = 'Sending...';

        const category_name = [...event.target].find(input => input.id === 'category_name').value;
        try {

          let updatedUser;
          if (!current) {
            updatedUser = { 
              ...userInfo.user,
              categories: [...userInfo.user.categories, {
                  category_name: category_name,
                  order: document.querySelectorAll('.profile-articles__category').length ?
                    Math.max( ...userInfo.user.categories.map(({id}) => id) )+1 : 1,
                  id: document.querySelectorAll('.profile-articles__category').length ?
                    Math.max( ...userInfo.user.categories.map(({id}) => id) )+1 : 1
              }]
            };
          } else {
            updatedUser = {
              ...userInfo.user,
              categories: [...userInfo.user.categories.filter(({id}) => id !== current.id), 
              { id: current.id, order: current.order, category_name }]
            }
          }

          await updateUser(updatedUser);
          setUserInfo({ user: updatedUser, documents: userInfo.documents });
          event.target.disabled = false;
          event.target.firstChild.data = 'Submit';
          closeModal();

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="row">
          <span className="modal-label">{!current ? 'Add new ' : 'Edit '}category</span>
          <button className="close-modal btn-floating red btn-small" onClick={closeModal}><i className="material-icons right">clear</i></button>
        <form className="col s12" onSubmit={send} ref={form}>
          <div className="row">
            <div className="input-field col s12">
              <input id="category_name" type="text" required />
              <label htmlFor="category-name" className="active" onClick={({target}) => target.previousElementSibling.focus()}>Category name</label>
            </div>
          </div>
        <button id="send-form" className="btn waves-effect waves-light blue accent-4" type="submit" name="action"
         >Submit
            <i className="material-icons right">send</i>
        </button>
        </form>
      </div>
    )
}

export default NewCategoryForm;