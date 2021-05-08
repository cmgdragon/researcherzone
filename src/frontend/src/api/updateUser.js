const updateUser = async newUser => fetch('/updateuser', {
    method: 'put',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify( { newUser, email: "carlos_ole1996@hotmail.com" } )
});

export default updateUser;