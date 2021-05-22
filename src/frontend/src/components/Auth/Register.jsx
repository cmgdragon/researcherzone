import React, { useState } from 'react';
import User from '~/models/User.ts';

const Register = ({changeRoute}) => {

    const [inputs, setInputs] = useState({email: '', name: '', password: '', password2: ''});
    const [errors, setError] = useState({email: '', name: '', password: '', password2: '', form: ''});
    const [sending, setSending] = useState(false);

    const validate = ({target}) => {
        setInputs({...inputs, [target.id]: target.value});

        switch(target.id) {
          case 'name':
            if (target.value.length < 3) {
              target.classList.add('invalid');
              setError({...errors, [target.id]: 'Too short! Min. 3 chars.'})
              return;
            }
            setError({...errors, [target.id]: '✓'})
            target.classList.remove('invalid');
            break;
          case 'password':
            if (target.value.length < 8) {
              target.classList.add('invalid');
              setError({...errors, [target.id]: 'Too short! Min. 8 chars.'})
              return;
            } else {
              if (target.value !== document.getElementById('password2').value) {
                target.classList.remove('invalid');
                document.getElementById('password2').classList.add('invalid');
                setError({...errors, password2: 'Passwords must match!', [target.id]: '✓'})
                return;
              }
            }

            setError({...errors, password2: '✓', [target.id]: '✓'})
            document.getElementById('password2').classList.remove('invalid');
            target.classList.remove('invalid');
            break;
          case 'password2':
            if (target.value !== document.getElementById('password').value) {
              target.classList.add('invalid');
              setError({...errors, [target.id]: 'Passwords must match!'})
              return;
            }
            setError({...errors, [target.id]: '✓'})
            target.classList.remove('invalid');
            break;
          case 'email':
            if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(target.value)) {
              target.classList.add('invalid');
              setError({...errors, [target.id]: 'Invalid email'})
              return;
            }
            setError({...errors, [target.id]: '✓'})
            target.classList.remove('invalid');
        }

    }

    const canBeSent = () => {
      for (const [key, value] of Object.entries(errors)) {
        if (key === 'form') continue;
        if (value !== '✓') return false;
      }
      return true;
    }

    const register = async (event) => {
        event.preventDefault();
        setSending(true);

        if (!canBeSent()) return;

        const newUser = new User({
            email: [...event.target].find(input => input.id === 'email').value,
            name: [...event.target].find(input => input.id === 'name').value,
            surname: [...event.target].find(input => input.id === 'surname').value,
            pwd: [...event.target].find(input => input.id === 'password').value
        });

        const request = await fetch('/register', {
          method: 'post',
          headers: { 'Content-Type': "application/json" },
          body: JSON.stringify(newUser)
        });
        const response = await request.json();
        switch(response.status) {
          case 200:
            changeRoute('newuser');
          break;
          default:
            setError({...errors, form: response.message});
            setSending(false);
        }
    }

    return (
        <div className="container row">
        <pre className="red-text">{errors.form}</pre>
        <form className="col s12" onSubmit={register}>
          <div className="row">
          <div className="input-field col s6">
              <input id="name" type="text" onChange={validate} />
              <span className={`helper-text ${errors.name === '✓' ? 'green-text accent-4' : 'red-text'}`}>{errors.name}</span>
              <label htmlFor="name">Name</label>              
            </div>
            <div className="input-field col s6">
              <input id="surname" type="text" />
              <label htmlFor="surname">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" onChange={validate} />
              <span className={`helper-text ${errors.password === '✓' ? 'green-text accent-4' : 'red-text'}`}>{errors.password}</span>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password2" type="password" onChange={validate} />
              <span className={`helper-text ${errors.password2 === '✓' ? 'green-text accent-4' : 'red-text'}`}>{errors.password2}</span>
              <label htmlFor="password2">Repeat password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" onChange={validate} />
              <span className={`helper-text ${errors.email === '✓' ? 'green-text accent-4' : 'red-text'}`}>{errors.email}</span>
              <label htmlFor="email">Email</label>
            </div>
          </div>
        <button id="send-form" className="btn waves-effect waves-light green accent-4" type="submit" name="action"
         disabled={!(errors.name === '✓' && errors.password === '✓' && errors.password2 === '✓' && errors.email === '✓') || sending}>{ sending ? 'Registering...' : 'Register' }
            <i className="material-icons right">done</i>
        </button>
        </form>
      </div>
    )
}

export default Register;