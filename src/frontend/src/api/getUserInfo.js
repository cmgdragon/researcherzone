const getUserInfo = async () => {
    try {
        const request = await fetch(`${'https://researcher.zone/'}getuserinfo`, {
            headers: { 'Content-Type': 'application/json',
                'pragma': 'no-cache',
                'cache-control': 'no-cache'
            }
        });
        const { isGuest, user, documents } = await request.json();
        return { isGuest, user, documents };
    } catch ({message}) {
        return false;
    }
    
}

export default getUserInfo;