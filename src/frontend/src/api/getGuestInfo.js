const getGuestInfo = async () => {
    try {
        const request = await fetch(`${'https://researcher.zone/'}getguestinfo`, {
            headers: { 'Content-Type': 'application/json',
                'pathname': window.location.pathname,
                'pragma': 'no-cache',
                'cache-control': 'no-cache'
            }
        });
        const guestInfo = await request.json();
        return guestInfo;
    } catch ({message}) {
        console.error(message);
    }
    
}

export default getGuestInfo;