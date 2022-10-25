import styled from 'styled-components';

export const AuthContainer = styled.div`
  max-width: 400px;
  margin: 4.8rem auto 0 auto;
  padding: 2.4rem;
  h1 {
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;

export const Link = styled.span`
  margin-top: 2.4rem;
  display: block;
  cursor: pointer;
  color: #b4b4b4;
  transition: 0.3s;
  &:hover {
    color: #2ba500;
  }
`;
