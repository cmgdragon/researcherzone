const getTokenInfo = async () => {
    try {
        const request = await fetch('http://localhost:8000/gettokeninfo', {
            headers: { 'Content-Type': 'application/json' }
        });
        const { user, documents } = await request.json();
        return { user, documents };
    } catch (error) {
        return false;
    }
    
}

export default getTokenInfo;