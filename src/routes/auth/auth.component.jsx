import { useState } from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import RegisterForm from '../../components/register-form/register-form.component';
import { AuthContainer, Link } from './auth.styles';

const Auth = () => {
  const [hasAnAccount, setHasAnAccount] = useState(true);
  const handleClick = () => {
    setHasAnAccount(!hasAnAccount);
  };
  return (
    <AuthContainer>
      {hasAnAccount ? (
        <>
          <SignInForm />
          <Link onClick={handleClick}>Don't have an account?</Link>
        </>
      ) : (
        <>
          <RegisterForm />
          <Link onClick={handleClick}>Have an account?</Link>
        </>
      )}
    </AuthContainer>
  );
};

export default Auth;
