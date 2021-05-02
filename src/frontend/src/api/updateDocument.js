const updateDocument = async document => fetch('/updatedocument', {
    method: 'put',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify( document )
});

export default updateDocument;