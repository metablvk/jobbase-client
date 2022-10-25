import { useState } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';
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
          <SignIn />
          <Link onClick={handleClick}>Don't have an account?</Link>
        </>
      ) : (
        <>
          <Register />
          <Link onClick={handleClick}>Have an account?</Link>
        </>
      )}
    </AuthContainer>
  );
};

export default Auth;
