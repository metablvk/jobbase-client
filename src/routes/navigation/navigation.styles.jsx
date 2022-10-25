import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../components/container/container.styles';

export const NavigationContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 0;
  padding-bottom: 0;
  @media screen and (min-width: 1200px) {
    margin-top: 4.4rem;
  }
`;

export const LogoContainer = styled.div`
  a {
    font-size: 2.4rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2.4rem;
  right: 2.5rem;
  font-size: 1.8rem;
  margin-left: 5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const NavLink = styled(Link)``;

export const NavItem = styled.li`
  margin-bottom: 2.4rem;
  padding-bottom: 1.2rem;
  border-bottom: 0.3rem solid #444;
  padding-left: 1rem;
`;

export const SideNav = styled.ul`
  height: 100%;
  width: 0rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.1s;
  background: #fff;
  padding-top: 8rem;
  ${({ menuState }) => (menuState ? 'width: 25rem' : '')};

  ${({ currentLocation }) =>
    currentLocation === '/'
      ? `
        ${NavItem}:nth-child(2) {
          border-bottom: 0.3rem solid #2BA500;
        }
      `
      : currentLocation === '/auth'
      ? `
         ${NavItem}:nth-child(4) {
          border-bottom: 0.3rem solid #2BA500;
        }
      `
      : ``}

  @media screen and (min-width: 1200px) {
    width: initial;
    flex-direction: row;
    position: static;
    overflow: visible;
    padding-top: initial;
    ${NavItem} {
      margin-right: 2.4rem;
      &:last-of-type {
        margin-right: 0;
      }
      padding-left: 0;
    }
    ${CloseButton} {
      display: none;
    }
  }
`;

export const Bar = styled.span`
  display: block;
  width: 3rem;
  height: 0.1rem;
  margin: 1rem auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #2f2f2f;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Hamburger = styled.div`
  display: block;
  cursor: pointer;
  /* ${({ menuState }) =>
    menuState
      ? `
        ${Bar}:nth-child(2) {
          opacity: 0;
        }
        ${Bar}:nth-child(1) {
          -webkit-transform: translateY(0.8rem) rotate(45deg);
          transform: translateY(1.1rem) rotate(45deg);
        }
        ${Bar}:nth-child(3) {
          -webkit-transform: translateY(-0.8rem) rotate(-45deg);
          transform: translateY(-1.1rem) rotate(-45deg);
        }
      `
      : ''} */
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
