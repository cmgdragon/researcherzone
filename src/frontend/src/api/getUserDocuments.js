const getUserDocuments = async user => {
    try {
        const request = await fetch(`${'///'}getuserdocuments`, {
            headers: { 'Content-Type': 'application/json',
                'pathname': window.location.pathname,
                'app-user': user,
                'pragma': 'no-cache',
                'cache-control': 'no-cache'
            }
        });
        const documents = await request.json();
        return documents;
    } catch (error) {
        console.log(error)
        return false;
    }
    
}

export default getUserDocuments;