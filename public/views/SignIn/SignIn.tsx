import * as React from 'react';
import {Link} from "react-router-dom";

import {Form} from "../../components/Form/Form";

import './SignIn.scss';

const signInFields = [{
  title: 'Login',
  name: 'login',
  type: 'text',
  description: 'Enter username',
  placeholder: 'Username'
}, {
  title: 'Password',
  name: 'password1',
  type: 'password',
  description: 'Enter password',
  placeholder: '••••••••'
}];

export class SignIn extends React.Component<void, void> {
  render() {
    return (
      <div className='wrapper__registration'>
        <Link to='/'>
          <span className='close'>
            &times;
          </span>
        </Link>
        <div className='registration__back'>
        </div>
        <div className='registration'>
          <Form fields={signInFields} control='Sign In'/>
        </div>
      </div>
    );
  }
}