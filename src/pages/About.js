import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  text-align: center;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const AboutSection = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-secondary);
  margin-bottom: 1rem;
`;

function About() {
  return (
    <AboutWrapper>
      <AboutTitle>About VelvetDream</AboutTitle>
      <AboutContent>
        <AboutImage src="https://picsum.photos/800/600" alt="VelvetDream Creative Process" />
        <AboutText>
          <AboutSection>
            <SectionTitle>Our Story</SectionTitle>
            <p>
              VelvetDream is a creative house born from a passion for imagination and an aesthetic that fuses softness, diversity, and elegance. Inspired by Japanese culture, particularly anime, and enchanting fantasy universes, VelvetDream seeks to captivate hearts and awaken curiosity.
            </p>
          </AboutSection>
          <AboutSection>
            <SectionTitle>Our Mission</SectionTitle>
            <p>
              Our mission is to offer immersive and collaborative experiences through various projects: board games, video games, animated series... Each creation is set in the universe of Raoronia, a rich and vibrant world that embodies our values: inclusivity, creativity, and authenticity.
            </p>
          </AboutSection>
          <AboutSection>
            <SectionTitle>Our Vision</SectionTitle>
            <p>
              At VelvetDream, we believe in the power of collective and diversity. Our aesthetic blends "fluffy" and "cute" influences with elegant and captivating designs, inspiring a wide audience while honoring our roots in the LGBT+ community and the Furry Fandom. This balance allows VelvetDream to touch everyone while remaining true to its essence.
            </p>
          </AboutSection>
        </AboutText>
      </AboutContent>
    </AboutWrapper>
  );
}

export default About;

