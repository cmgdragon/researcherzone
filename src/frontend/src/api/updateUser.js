const updateUser = async newUser => fetch('/updateuser', {
    method: 'put',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify( { newUser, email: newUser.email } )
});

export default updateUser;