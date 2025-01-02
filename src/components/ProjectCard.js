import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: var(--color-light);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const CardDescription = styled.p`
  color: var(--color-dark);
`;

function ProjectCard({ project }) {
  return (
    <Card>
      <CardImage src={project.image} alt={project.title} />
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;

