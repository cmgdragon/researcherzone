const logout = async () => fetch('/logout', {
    method: 'get'
}).then(() => window.location.href = '/');

export default logout;