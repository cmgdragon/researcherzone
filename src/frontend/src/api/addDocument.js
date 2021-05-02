const addDocument = async newDocument => fetch('/documentadd', {
    method: 'post',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify( newDocument )
});

export default addDocument;