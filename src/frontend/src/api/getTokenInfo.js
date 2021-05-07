const getTokenInfo = async () => {
    try {
        const request = await fetch('http://localhost:8000/gettokeninfo', {
            headers: { 'Content-Type': 'application/json',
                'pathname': window.location.pathname,
                'pragma': 'no-cache',
                'cache-control': 'no-cache'
            }
        });
        const { user, documents } = await request.json();
        return { user, documents };
    } catch ({message}) {
        return false;
    }
    
}

export default getTokenInfo;