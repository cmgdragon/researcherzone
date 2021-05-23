import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer.jsx';

const Login = ({registered, changeRoute}) => {

    const [error, setError] = useState('');
    const [message, setMessage] = useState(undefined);

    useEffect(() => {
      if (registered) {
        setMessage('We have sent a verification URL to your email. Check your spam folder.');
      }
      if (window.location.search.includes('verification_successful')) {
        setMessage('Verification successful! Please, log in');
      }
    }, []);

    const login = async (event) => {
        event.preventDefault();        
        setMessage(undefined);
        
        const login = {};
        login.email = [...event.target].find(input => input.id === 'email').value;
        login.pwd = [...event.target].find(input => input.id === 'password').value;
         const request = await fetch('/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        });
      const response = await request.json();

      switch (response.status) {
            case 200:
                window.location.href = "/";
            break;
            default:
                setError(response.message);
      }
      
    }

    return (
      <>
        <div className="container row">
        <form className="col s12" onSubmit={login}>
        <pre className="green-text">{message}</pre>
        <pre className="red-text">{error}</pre>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        <button id="send-form" className="btn waves-effect waves-light blue accent-4" type="submit" name="action"
         >Login
            <i className="material-icons right">login</i>
        </button>
        </form>
      </div>
      <div className="container">Not yet a member? <a href="#" className="link" onClick={() => changeRoute('register')}>Register</a></div>
      <Footer dynamic={true} />
      </>
    )
}

export default Login;