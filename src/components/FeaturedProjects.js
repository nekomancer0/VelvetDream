import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const ProjectsWrapper = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  font-weight: bold;
  color: var(--color-primary);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-secondary);
  }
`;

const featuredProjects = [
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
];

function FeaturedProjects() {
  return (
    <ProjectsWrapper>
      <ProjectsContent>
        <ProjectsTitle>Featured Projects</ProjectsTitle>
        <ProjectGrid>
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectGrid>
        <ViewAllLink to="/projects">View All Projects</ViewAllLink>
      </ProjectsContent>
    </ProjectsWrapper>
  );
}

export default FeaturedProjects;

