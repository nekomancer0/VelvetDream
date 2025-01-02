import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import About from '../components/About';

const HomeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <About />
      <FeaturedProjects />
    </HomeWrapper>
  );
}

export default Home;

