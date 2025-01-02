import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  background-color: var(--color-dark);
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const Logo = styled.img`
  max-width: 800px;
  width: 90%;
  height: auto;
  margin-bottom: 2rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--color-light);
  margin-top: 2rem;
  font-family: var(--font-body);
`;

function Hero() {
  return (
    <HeroWrapper>
      <HeroContent>
        <Logo src="/logo.png" alt="VelvetDream" />
        <HeroSubtitle>Where imagination knows no bounds</HeroSubtitle>
      </HeroContent>
    </HeroWrapper>
  );
}

export default Hero;
