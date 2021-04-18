import React, { useState } from 'react';

const Login = () => {

    const [error, setError] = useState('');

    const login = async (event) => {
        event.preventDefault();        

        const login = {};
        login.email = [...event.target].find(input => input.id === 'email').value;
        login.pwd = [...event.target].find(input => input.id === 'password').value;
         const request = await fetch('/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        });
      const response = await request.json();
      console.log(response)
      switch (response.status) {
            case 200:
                console.log(response.user)
                //localStorage.setItem('token', response.token);
                //window.location.href = '/';
            break;
            default:
                setError(response.message);
      }
      
    }

    return (
        <div class="row">
        
        <form class="col s12" onSubmit={login}>
        <pre class="red-text">{error}</pre>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" />
              <label for="password">Password</label>
            </div>
          </div>
        <button id="send-form" class="btn waves-effect waves-light blue accent-4" type="submit" name="action"
         >Login
            <i class="material-icons right">login</i>
        </button>
        </form>
      </div>
    )
}

export default Login;