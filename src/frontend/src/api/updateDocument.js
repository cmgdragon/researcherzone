const updateDocument = async (document) => fetch('/updatedocument', {
    method: 'put',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify( { document, email: document.user } )
});

export default updateDocument;