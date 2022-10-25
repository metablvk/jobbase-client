import { Form, Link } from './sign-in.styles';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button>Login</button>
      </Form>
    </>
  );
};

export default SignIn;
