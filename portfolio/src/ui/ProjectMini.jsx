import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectsData from "../assets/data/projectData.json";
import Heading from "./Heading";

const ProjectMiniContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
  gap: 3rem;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MiniProjectListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-0);
`;

const MiniProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
`;

const MiniProjectDetails = styled.div`
  margin-top: 1rem;
`;

function ProjectMini() {
  const miniProjects = projectsData.filter(
    (project) => project.type === "mini"
  );

  return (
    <ProjectMiniContainer>
      {miniProjects.map((project) => (
        <Link to={`/projects${project.link}`} key={project.name}>
          <MiniProjectListItem key={project.name}>
            <MiniProjectImage src={project.img} alt={project.name} />
            <MiniProjectDetails>
              <Heading as="h4">{project.name}</Heading>
            </MiniProjectDetails>
          </MiniProjectListItem>
        </Link>
      ))}
    </ProjectMiniContainer>
  );
}

export default ProjectMini;
