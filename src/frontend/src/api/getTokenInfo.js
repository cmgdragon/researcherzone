const getTokenInfo = async () => {
    try {
        const request = await fetch('http://localhost:8000/gettokeninfo', {
            headers: { 'Content-Type': 'application/json' }
        });
        const { user } = await request.json();
        return user;
    } catch (error) {
        return false;
    }
    
}

export default getTokenInfo;