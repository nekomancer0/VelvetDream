import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const ProjectsTitle = styled.h1`
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const projects = [
  {
    id: 1,
    title: 'Raoronia Chronicles',
    description: 'An immersive board game set in the magical world of Raoronia.',
    image: 'https://picsum.photos/600/400',
  },
  {
    id: 2,
    title: 'Fluffy Adventures',
    description: 'A heartwarming animated series following the journey of diverse characters.',
    image: 'https://picsum.photos/600/400',
  },
  {
    id: 3,
    title: 'Dreamscape VR',
    description: 'A virtual reality experience that brings Raoronia to life.',
    image: 'https://picsum.photos/600/400',
  },
];

function Projects() {
  return (
    <ProjectsWrapper>
      <ProjectsTitle>Our Projects</ProjectsTitle>
      <ProjectGrid>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </ProjectsWrapper>
  );
}

export default Projects;

