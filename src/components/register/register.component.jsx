import { Form, Link } from './register.styles';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <input type='password' placeholder='Confirm Password' />
        <button>Register</button>
      </Form>
    </>
  );
};

export default Register;
