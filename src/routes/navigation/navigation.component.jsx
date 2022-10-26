// Navigation Component
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firebase/firebase.utils';

// Styled Components
import {
  NavigationContainer,
  LogoContainer,
  SideNav,
  NavLink,
  NavItem,
  CloseButton,
  Hamburger,
  Bar,
} from './navigation.styles';

const Navigation = () => {
  const [menuState, setMenuState] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  const location = useLocation();
  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer>
          <NavLink to='/'>Jobbase</NavLink>
        </LogoContainer>
        <SideNav menuState={menuState} currentLocation={location.pathname}>
          <CloseButton onClick={toggleMenu}>X</CloseButton>

          <NavItem>
            <NavLink to='/'>Find Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/upload-resume'>Upload your resume</NavLink>
          </NavItem>
          {currentUser ? (
            <>
              <NavItem>
                <NavLink as='span' onClick={signOutUser}>
                  Sign out
                </NavLink>
              </NavItem>
            </>
          ) : (
            <NavItem>
              <NavLink to='/auth'>Sign in</NavLink>
            </NavItem>
          )}
        </SideNav>
        <Hamburger onClick={toggleMenu} menuState={menuState}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
