const deleteDocument = async (document_id, user) => fetch('/deletedocument', {
    method: 'delete',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify( { document_id, email: user.email } )
});

export default deleteDocument;