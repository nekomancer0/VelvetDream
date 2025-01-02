import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutWrapper = styled.section`
  padding: 4rem 0;
  background-color: var(--color-light);
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--color-dark);
`;

const AboutLink = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: var(--color-primary);
  color: var(--color-light);
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-secondary);
  }
`;

function About() {
  return (
    <AboutWrapper>
      <AboutContent>
        <AboutTitle>About VelvetDream</AboutTitle>
        <AboutText>
          VelvetDream is a creative house born from a passion for imagination and an aesthetic that fuses softness, diversity, and elegance. Inspired by Japanese culture, particularly anime, and enchanting fantasy universes, VelvetDream seeks to captivate hearts and awaken curiosity.
        </AboutText>
        <AboutLink to="/about">Learn More</AboutLink>
      </AboutContent>
    </AboutWrapper>
  );
}

export default About;

