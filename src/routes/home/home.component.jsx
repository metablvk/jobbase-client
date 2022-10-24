import { useEffect } from 'react';
import { HomeContainer } from './home.styles';

const Home = () => {
  useEffect(() => {
    document.title = 'Jobbase | Find Jobs';
  });
  return (
    <HomeContainer>
      <h1>Explore</h1>
    </HomeContainer>
  );
};

export default Home;
