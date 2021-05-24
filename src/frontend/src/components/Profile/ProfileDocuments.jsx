import React, { useEffect, useState } from 'react';
import DocumentRender from './DocumentRenders/index.jsx';
import NewCategoryForm from './DocumentForms/NewCategoryForm.jsx';
import deleteDocument from '~/frontend/src/api/deleteDocument.js';
import deleteCategory from '~/frontend/src/api/deleteCategory.js';
import updateUser from '~/frontend/src/api/updateUser.js';
import updateDocument from '~/frontend/src/api/updateDocument.js';
import DocumentsModal from './DocumentsModal.jsx';
import CitationModal from './Citations/CitationModal.jsx';
import selectCitation from './Citations/selectCitation.js';
import selectForm from './DocumentForms/selectForm.js';

const ProfileDocuments = ({userInfo, setUserInfo}) => {

    const [showModal, setShowModal] = useState(false);
    const [showCitation, setShowCitation] = useState(false);
    const [activeCitation, setActiveCitation] = useState(undefined);
    const [activeForm, setActiveForm] = useState(undefined);

    useEffect(() => {
        const elems = document.querySelectorAll('.dropdown-trigger');
        if (!userInfo.isGuest) M.Dropdown.init(elems);
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

    const addDocument = (category_id, Form, doc) => {
        setShowModal(true);
        setActiveForm(<Form
            userInfo={userInfo}
            setShowModal={setShowModal}
            setActiveForm={setActiveForm}
            setUserInfo={setUserInfo}
            categoryId={category_id}
            current={doc}
        />);
    }

    const citate = (Form, doc) => {
        setShowCitation(true);
        setActiveCitation(<Form
            setShowCitation={setShowCitation}
            setActiveCitation={setActiveCitation}
            doc={doc}
        />);
    }

    const deleteOneDocument = async (target, id) => {
        if (confirm('Delete this document?')) {

            target.parentElement.disabled = true;
            target.classList.add('rotating');
            target.innerText = "autorenew";

            try {
                await deleteDocument(id, userInfo.user);
                const updatedDocuments = userInfo.documents.filter(({_id}) => _id !== id)
                                            .sort((a, b) => orderList(a, b))
                                            .map((doc, index) => ({ ...doc, order: index }));

                setUserInfo({ user: userInfo.user, documents: updatedDocuments });
            } catch (error) {
                console.error(error);
            }
        }
    }

    const deleteCategoryDocuments = async (target, category, categoryId) => {
        if (confirm(`Delete category "${category}" and all its documents?`)) {

            console.dir(target)
            target.parentElement.disabled = true;
            target.classList.add('rotating');
            target.innerText = "autorenew";

            try {
                const updatedDocuments = userInfo.documents.filter(({category: currentCat}) => currentCat !== category);
                const updatedUser = { ...userInfo.user, categories: userInfo.user.categories.filter(({category_name}) => category_name !== category) };
                updatedUser.categories = [ ...updatedUser.categories ]
                                            .sort((a, b) => orderList(a, b))
                                            .map((cat, index) => ({ ...cat, order: index }));

                await deleteCategory(categoryId, updatedUser);
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

    const changeCategoryOrder = async (target, modify, currentName, currentOrder) => {
        if (target.disabled) return;
        target.disabled = true;

        const categoryChangedOrder = currentOrder + (modify);

        const updatedCategories = [ ...userInfo.user.categories ];
        const toChangeIndex = updatedCategories.findIndex(({category_name, order}) => 
                                category_name === currentName && order == currentOrder);

        const toSwitchIndex = updatedCategories.findIndex(cat => cat.order === categoryChangedOrder);

        const oldOrder = updatedCategories[toChangeIndex].order;
        updatedCategories[toChangeIndex].order = categoryChangedOrder;
        updatedCategories[toSwitchIndex].order = oldOrder;

        const updatedUser = { ...userInfo.user, categories: updatedCategories };

        try {
            await updateUser(updatedUser);
            setUserInfo({ user: updatedUser, documents: userInfo.documents });
            target.disabled = false;
        } catch (error) {
            console.error(error);
        }
    }

    const changeDocumentOrder = async (target, modify, currentCategory, currentOrder) => {
        if (target.disabled) return;
        target.disabled = true;

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
            
        try {
            await updateDocument(updatedCategoryDocuments[toChangeIndex]);
            await updateDocument(updatedCategoryDocuments[toSwitchIndex]);
            setUserInfo({ user: userInfo.user, documents: updatedDocuments });
            target.disabled = false;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={'profile-articles container'}>
            { !userInfo.isGuest ? <>
                <div className="profile-articles__add-category">
                    <a className='btn-floating btn-medium waves-effect waves-light blue dropdown-trigger' href='#' data-target='dropdownc'><i className="material-icons">add</i></a>
                </div>
                <ul id='dropdownc' className='dropdown-content'>
                    <li><a onClick={() => addEditCategory(undefined)}>Add category</a></li>
                </ul>
                </> : undefined
            }

        <div className={'profile-articles__categories'}>
        {
            userInfo.user.categories.sort((a, b) => orderList(a, b))
            .map(({id: category_id, category_name, order}, index) => {
             return (
                 <div className={'profile-articles__category'} key={index} data-category={category_name} data-order={`order-${order}`}>
                     <div className="profile-articles__category-header">

                        <div className="profile-articles__buttons-group1">
                        <span className={'profile-articles__category-name'}>{category_name}</span>
                        { !userInfo.isGuest ? <>              
                            <div className="profile-articles__order-controls">
                                { index === 0 ? undefined :
                                <button className="profile-articles__order-button" onClick={({target}) => changeCategoryOrder(target, -1, category_name, order)}>
                                    <i className="material-icons" >expand_less</i>
                                </button>
                                }
                                {
                                    index === userInfo.user.categories.length-1 ? undefined :
                                    <button className="profile-articles__order-button" onClick={({target}) => changeCategoryOrder(target, 1, category_name, order)}>
                                        <i className="material-icons" >expand_more</i>
                                    </button>
                                }
                            </div>
                        </> : undefined
                        }
                        </div>
                        { !userInfo.isGuest ? <>  
                        <div className="profile-articles__buttons-group2">
                            <button className='btn-floating btn-small waves-effect waves-light blue dropdown-trigger' href='#' data-target={`dropdown${index}`}><i className="material-icons">add</i></button>
                            <button id="delete-category" onClick={({target}) => deleteCategoryDocuments(target, category_name, category_id)} className="btn waves-effect waves-light btn-floating red btn-small">
                                <i className="material-icons right">delete</i>
                            </button>
                            <button id="edit-document" onClick={() => addEditCategory({id: category_id, category_name, order})} className="profile-articles__edit-category btn waves-effect waves-light btn-floating blue btn-small">
                                <i className="material-icons right">edit</i>
                            </button>
                        </div> </>
                        : undefined }

                        <ul id={`dropdown${index}`} className='dropdown-content'>
                            <li><a onClick={() => addDocument(category_id, selectForm('freedocument'), undefined)}>Add free document</a></li>
                            <li><a onClick={() => addDocument(category_id, selectForm('journalarticle'), undefined)}>Add journal article</a></li>
                            <li><a onClick={() => addDocument(category_id, selectForm('book'), undefined)}>Add book</a></li>
                            <li><a onClick={() => addDocument(category_id, selectForm('bookchapter'), undefined)}>Add book chapter</a></li>
                            <li><a onClick={() => addDocument(category_id, selectForm('conferenceproceeding'), undefined)}>Add conference proceeding</a></li>
                            <li><a onClick={() => addDocument(category_id, selectForm('thesis'), undefined)}>Add thesis</a></li>
                        </ul>
                    </div>
                    {
                        userInfo.documents.filter(({category}) => category === category_id)
                        .sort((a, b) => orderList(a, b))
                        .map((doc, docIndex) => {
                            return (
                                <div className={'profile-articles__category-document'} key={JSON.stringify(doc)}>
                                    <DocumentRender doc={doc} />
                                    <div className="profile-articles__buttons-group">
                                        { !userInfo.isGuest ?
                                        <div className="profile-articles__buttons-group1">
                                            <button id="delete-document" onClick={({target}) => deleteOneDocument(target, doc._id)} className="btn waves-effect waves-light btn-floating red btn-small"
                                            >
                                                <i className="material-icons right">delete</i>
                                            </button>
                                            <button id="edit-document" onClick={() => addDocument(category_id, selectForm(doc.type), doc)} className="btn waves-effect waves-light btn-floating blue btn-small"
                                            >
                                                <i className="material-icons right">edit</i>
                                            </button>

                                            <div className="profile-articles__order-controls">
                                                { docIndex === 0 ? undefined :
                                                <button className="profile-articles__order-button" onClick={({target}) => changeDocumentOrder(target, -1, doc.category, doc.order)}>
                                                    <i className="material-icons">expand_less</i>
                                                </button>
                                                }
                                                {docIndex === 0 && userInfo.documents.filter(({category}) => category === category_id).length <= 1
                                                || docIndex === userInfo.documents.filter(({category}) => category === category_id).length-1 ? undefined :
                                                <button className="profile-articles__order-button" onClick={({target}) => changeDocumentOrder(target, 1, doc.category, doc.order)}>
                                                    <i className="material-icons">expand_more</i>
                                                </button>
                                                }
                                            </div>
                                        </div>
                                        : <span></span> }
                                        { doc.can_be_cited ?
                                        <div className="profile-articles__buttons-group2">
                                            <a className="waves-effect waves-light blue btn" onClick={() => citate(selectCitation(doc.type), doc)}>
                                                <i className="material-icons right">book</i>Citate
                                            </a>
                                        </div>
                                        : undefined}
                                    </div>
                                    {docIndex === userInfo.documents.filter(({category}) => category === category_id).length-1 ? undefined :
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
        <DocumentsModal show={showModal} activeForm={activeForm} />
        <CitationModal show={showCitation} activeCitation={activeCitation} />
        </div>
    )
}

export default ProfileDocuments;