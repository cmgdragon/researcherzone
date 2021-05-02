const deleteDocument = async document_id => fetch('/deletedocument', {
    method: 'delete',
    body: document_id
});

export default deleteDocument;