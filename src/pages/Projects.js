import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

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
    title: "Example Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 2,
    title: "Example Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 3,
    title: "Example Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: "https://picsum.photos/600/400",
  },
];

function Projects() {
  return (
    <ProjectsWrapper>
      <ProjectsTitle>Our Projects</ProjectsTitle>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </ProjectsWrapper>
  );
}

export default Projects;
