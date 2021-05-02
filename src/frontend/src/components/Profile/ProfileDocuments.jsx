import React, { useEffect, useState } from 'react';
import NewCategoryForm from './DocumentForms/NewCategoryForm.jsx';
import FreeDocumentForm from './DocumentForms/FreeDocumentForm.jsx';
import BookForm from './DocumentForms/BookForm.jsx'
import JournalArticleForm from './DocumentForms/JournalArticleForm.jsx';
import DocumentRender from './DocumentRenders/index.jsx';
import deleteDocument from '~/frontend/src/api/deleteDocument.js';
import deleteCategory from '~/frontend/src/api/deleteCategory.js';
import updateUser from '~/frontend/src/api/updateUser.js';
import updateDocument from '~/frontend/src/api/updateDocument.js';
import Modal from '../Modal.jsx';

const ProfileDocuments = ({user}) => {

    const [userInfo, setUserInfo] = useState(user);
    const [showModal, setShowModal] = useState(false);
    const [activeForm, setActiveForm] = useState(undefined);

    useEffect(() => {
        const elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems);
    }, [userInfo])

    const addEditCategory = category => {
        setShowModal(true);
        setActiveForm(<NewCategoryForm
            userInfo={userInfo}
            setShowModal={setShowModal}
            setActiveForm={setActiveForm}
            setUserInfo={setUserInfo}
            current={category}
        />);
    }

    const addDocument = ({target}, Form, doc) => {
        setShowModal(true);
        setActiveForm(<Form
            userInfo={userInfo}
            setShowModal={setShowModal}
            setActiveForm={setActiveForm}
            setUserInfo={setUserInfo}
            categoryNode={target.parentElement.parentElement.parentElement}
            current={doc}
        />);
    }

    const deleteOneDocument = async id => {
        if (confirm('Delete this document?')) {
            try {
                await deleteDocument(id);
                const updatedDocuments = userInfo.documents.filter(({_id}) => _id !== id);
                setUserInfo({ user: userInfo.user, documents: updatedDocuments });
            } catch (error) {
                console.error(error);
            }
        }
    }

    const deleteCategoryDocuments = async category => {
        if (confirm(`Delete category "${category}" and all its documents?`)) {
            try {
                const updatedDocuments = userInfo.documents.filter(({category: currentCat}) => currentCat !== category);
                const updatedUser = { ...userInfo.user, categories: userInfo.user.categories.filter(({category_name}) => category_name !== category) };
                await deleteCategory(category, updatedUser);
                setUserInfo({ user: updatedUser, documents: updatedDocuments });
            } catch (error) {
                console.error(error);
            }
        }
    }

    const orderList = (a, b) => {
        if (a.order > b.order) {
            return 1;
        }
        if (a.order < b.order) {
            return -1;
        }
        return 0;
    }

    const changeCategoryOrder = async (modify, currentName, currentOrder) => {
        const categoryChangedOrder = currentOrder + (modify);

        const updatedCategories = [ ...userInfo.user.categories ];
        const toChangeIndex = updatedCategories.findIndex(({category_name, order}) => 
                                category_name === currentName && order == currentOrder)
        const toSwitchIndex = updatedCategories.findIndex(cat => cat.order === categoryChangedOrder);

        const oldOrder = updatedCategories[toChangeIndex].order;
        updatedCategories[toChangeIndex].order = categoryChangedOrder;
        updatedCategories[toSwitchIndex].order = oldOrder;

        const updatedUser = { ...userInfo.user, categories: updatedCategories };
            
        console.log(updatedUser)

        try {
            await updateUser(updatedUser);
            setUserInfo({ user: updatedUser, documents: userInfo.documents })
        } catch (error) {
            console.error(error);
        }
    }

    const changeDocumentOrder = async (modify, currentCategory, currentOrder) => {
        const documentChangedOrder = currentOrder + (modify);

        const updatedCategoryDocuments = [ ...userInfo.documents.filter(({category}) => category === currentCategory) ];

        const toChangeIndex = updatedCategoryDocuments.findIndex(({category, order}) => 
                                category === currentCategory && order == currentOrder)
        const toSwitchIndex = updatedCategoryDocuments.findIndex(doc => doc.order === documentChangedOrder);

        const oldOrder = updatedCategoryDocuments[toChangeIndex].order;
        updatedCategoryDocuments[toChangeIndex].order = documentChangedOrder;
        updatedCategoryDocuments[toSwitchIndex].order = oldOrder;

        const updatedDocuments = [
            ...userInfo.documents.filter(doc => doc.category !== currentCategory),
            ...updatedCategoryDocuments 
        ];
            
        console.log(updatedDocuments)
        try {
            await updateDocument(updatedCategoryDocuments[toChangeIndex]);
            await updateDocument(updatedCategoryDocuments[toSwitchIndex]);
            setUserInfo({ user: userInfo.user, documents: updatedDocuments })
        } catch (error) {
            console.error(error);
        }
    }

    const editDocument = type => {
        switch (type) {
            case 'freedocument':
                return FreeDocumentForm;
            case 'journalarticle':
                return JournalArticleForm
        }
    }

    return (
        <div className={'profile-articles'}>

            <a className='btn-floating btn-medium waves-effect waves-light blue dropdown-trigger' href='#' data-target='dropdownc'><i className="material-icons">add</i></a>

            <ul id='dropdownc' className='dropdown-content'>
                <li><a onClick={() => addEditCategory('')}>Add category</a></li>
            </ul>


        <div className={'profile-articles__categories'}>
        {
            userInfo.user.categories.sort((a, b) => orderList(a, b))
            .map(({category_name, order}, index) => {
             return (
                 <div className={'profile-articles__category'} key={index} data-category={category_name} data-order={`order-${order}`}>
                     <div className="profile-articles__category-header">

                        <div className="profile-articles__buttons-group1">
                            <span className={'profile-articles__category-name'}>{category_name}</span>
                            <div className="profile-articles__order-controls">
                                { index === 0 ? undefined :
                                <button className="profile-articles__order-button">
                                    <i className="material-icons" onClick={() => changeCategoryOrder(-1, category_name, order)}>expand_less</i>
                                </button>
                                }
                                {
                                    index === userInfo.user.categories.length-1 ? undefined :
                                    <button className="profile-articles__order-button">
                                        <i className="material-icons" onClick={() => changeCategoryOrder(1, category_name, order)}>expand_more</i>
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="profile-articles__buttons-group2">
                            <button className='btn-floating btn-small waves-effect waves-light blue dropdown-trigger' href='#' data-target={`dropdown${index}`}><i className="material-icons">add</i></button>
                            <button id="delete-category" onClick={() => deleteCategoryDocuments(category_name)} className="btn waves-effect waves-light btn-floating red btn-small">
                                <i className="material-icons right">delete</i>
                            </button>
                        </div>

                            <ul id={`dropdown${index}`} className='dropdown-content'>
                                <li><a onClick={event => addDocument(event, FreeDocumentForm, undefined)}>Add free document</a></li>
                                <li><a onClick={event => addDocument(event, JournalArticleForm, undefined)}>Add journal article</a></li>
                            </ul>
                    </div>
                    {
                        userInfo.documents.filter(({category}) => category === category_name)
                        .sort((a, b) => orderList(a, b))
                        .map((doc, docIndex) => {
                            return (
                                <div className={'profile-articles__category-document'} key={JSON.stringify(doc)}>
                                    <DocumentRender doc={doc} />
                                    <div className="profile-articles__buttons-group1">
                                        <button id="delete-document" onClick={() => deleteOneDocument(doc._id)} className="btn waves-effect waves-light btn-floating red btn-small"
                                        >
                                            <i className="material-icons right">delete</i>
                                        </button>
                                        <button id="edit-document" onClick={event => addDocument(event, editDocument(doc.type), doc)} className="btn waves-effect waves-light btn-floating blue btn-small"
                                        >
                                            <i className="material-icons right">edit</i>
                                        </button>

                                        <div className="profile-articles__order-controls">
                                            { docIndex === 0 ? undefined :
                                            <button className="profile-articles__order-button">
                                                <i className="material-icons" onClick={() => changeDocumentOrder(-1, doc.category, doc.order)}>expand_less</i>
                                            </button>
                                            }
                                            {docIndex === userInfo.documents.filter(({category}) => category === category_name).length-1 ? undefined :
                                            <button className="profile-articles__order-button">
                                                <i className="material-icons" onClick={() => changeDocumentOrder(1, doc.category, doc.order)}>expand_more</i>
                                            </button>
                                            }
                                        </div>

                                    </div>

                                    {docIndex === userInfo.documents.filter(({category}) => category === category_name).length-1 ? undefined :
                                        <div className="profile-articles__document-separator"></div>
                                    }

                                </div>
                            )
                        })
                    }

                 </div>
             )   
            })
        }
        </div>
        <Modal show={showModal}>
            {activeForm}
        </Modal>
        </div>
    )
}

export default ProfileDocuments;