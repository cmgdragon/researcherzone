import React, { useState } from 'react';
import User from '~/models/User.ts';

const Register = () => {

    const [inputs, setInputs] = useState({email: '', name: '', password: '', password2: ''});
    const [errors, setError] = useState({email: '', name: '', password: '', password2: ''});
    const [isValid, setValid] = useState(false);

    const validate = ({target}) => {
        setInputs({...inputs, [target.id]: target.value});

        if (target.id === 'name') {

            if (target.value.length < 3) {
                target.classList.add('invalid');
                setError({...errors, [target.id]: 'Too short! Min. 3 chars.'})
                return;
            }
            setError({...errors, [target.id]: '✓'})
            target.classList.remove('invalid');

        } else if (target.id === 'password') {
            if (target.value.length < 8) {
                target.classList.add('invalid');
                setError({...errors, [target.id]: 'Too short! Min. 8 chars.'})
                return;
            }
            setError({...errors, [target.id]: '✓'})
            target.classList.remove('invalid');

        } else if (target.id === 'password2') {
            if (target.value !== document.getElementById('password').value) {
                target.classList.add('invalid');
                setError({...errors, [target.id]: 'Passwords must match!'})
                return;
            }
            setError({...errors, [target.id]: '✓'})
            target.classList.remove('invalid');

        } else if (target.id === 'email') {
            if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(target.value)) {
                target.classList.add('invalid');
                setError({...errors, [target.id]: 'Invalid email'})
                return;
            }
            setError({...errors, [target.id]: '✓'})
            target.classList.remove('invalid');
        }
        //isValidForm();
    }

   const isValidForm = () => {
        for (const input of Object.values(errors)) {
            console.log(input)
            if (input !== '') return;
        }
        setValid(true);
    }

    const register = async (event) => {
        event.preventDefault();
        const newUser = new User({
            email: [...event.target].find(input => input.id === 'email').value,
            name: [...event.target].find(input => input.id === 'name').value,
            surname: [...event.target].find(input => input.id === 'surname').value,
            pwd: [...event.target].find(input => input.id === 'password').value
        });

        const response = await fetch('/register', {
          method: 'post',
          headers: { 'Content-Type': "application/json" },
          body: JSON.stringify(newUser)
        });
        console.log(await response.json())
    }

    return (
        <div class="row">
        <form class="col s12" onSubmit={register}>
          <div class="row">
          <div class="input-field col s6">
              <input id="name" type="text" onChange={validate} />
              <span class={`helper-text ${errors.name === '✓' ? 'green-text accent-4' : 'red-text'}`}>{errors.name}</span>
              <label for="name">Name</label>              
            </div>
            <div class="input-field col s6">
              <input id="surname" type="text" />
              <label for="surname">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" onChange={validate} />
              <span class={`helper-text ${errors.password === '✓' ? 'green-text accent-4' : 'red-text'}`}>{errors.password}</span>
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password2" type="password" onChange={validate} />
              <span class={`helper-text ${errors.password2 === '✓' ? 'green-text accent-4' : 'red-text'}`}>{errors.password2}</span>
              <label for="password2">Repeat password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" onChange={validate} />
              <span class={`helper-text ${errors.email === '✓' ? 'green-text accent-4' : 'red-text'}`}>{errors.email}</span>
              <label for="email">Email</label>
            </div>
          </div>
        <button id="send-form" class="btn waves-effect waves-light green accent-4" type="submit" name="action"
         disabled={!(errors.name === '✓' && errors.password === '✓' && errors.password2 === '✓' && errors.email === '✓')}>Register
            <i class="material-icons right">done</i>
        </button>
        </form>
      </div>
    )
}

export default Register;