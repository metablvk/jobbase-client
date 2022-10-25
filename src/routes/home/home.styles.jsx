import styled from 'styled-components';
import { Container } from '../../components/container/container.styles';

export const HomeContainer = styled(Container)`
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  margin-top: 3.2rem;

  @media screen and (min-width: 1200px) {
    margin-top: 0;
  }
`;
