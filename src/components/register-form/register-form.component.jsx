import { useState } from 'react';
import { Form } from './register-form.styles';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password, confirmPassword } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <h1>Register</h1>
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
        <input
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button>Register</button>
      </Form>
    </>
  );
};

export default RegisterForm;
