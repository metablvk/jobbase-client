// Navigation Component
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Styled Components
import {
  NavigationContainer,
  LogoContainer,
  SideNav,
  NavItem,
  CloseButton,
  Hamburger,
  Bar,
} from './navigation.styles';

const Navigation = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer>
          <Link to='/'>Jobbase</Link>
        </LogoContainer>
        <SideNav menuState={menuState}>
          <CloseButton onClick={toggleMenu}>X</CloseButton>

          <NavItem>
            <Link to='/'>Find Jobs</Link>
          </NavItem>
          <NavItem>
            <Link to='/upload-resume'>Upload your resume</Link>
          </NavItem>
          <NavItem>
            <Link to='/sign-in'>Sign In</Link>
          </NavItem>
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
