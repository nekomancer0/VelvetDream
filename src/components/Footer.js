import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const FooterSection = styled.div`
  h3 {
    font-family: var(--font-display);
    color: var(--color-secondary);
    margin-bottom: 1rem;
  }
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterLink = styled(Link)`
  color: var(--color-light);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-secondary);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: var(--color-light);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-secondary);
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #555;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li>
              <FooterLink to="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink to="/about">About</FooterLink>
            </li>
            <li>
              <FooterLink to="/projects">Projects</FooterLink>
            </li>
            <li>
              <FooterLink to="/contact">Contact</FooterLink>
            </li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <h3>Connect With Us</h3>
          <SocialIcons>
            <SocialIcon
              href="https://x.com/velvetdream_off"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/velvetdream.off/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
        <FooterSection>
          <h3>Contact Us</h3>
          <p>Email: contact@velvetdream.eu</p>
        </FooterSection>
      </FooterContent>
      <Copyright>&copy; 2024-2025 VelvetDream. All rights reserved.</Copyright>
    </FooterWrapper>
  );
}

export default Footer;
