import { useState } from 'react';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import { Form } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          onChange={handleChange}
          name='email'
          value={email}
        />
        <input
          type='password'
          placeholder='password'
          onChange={handleChange}
          name='password'
          value={password}
        />
        <button>Login</button>
      </Form>
    </>
  );
};

export default SignInForm;
