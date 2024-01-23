import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectsData from "../assets/data/projectData.json";
import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import TechStack from "./TechStack";

const ProjectMiniContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
  gap: 2rem;
  /* margin-top: 2rem; */
`;

const MiniProjectListItem = styled.div`
  background-color: var(--color-brown-0);
`;

const MiniProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
`;

const MiniProjectDetails = styled.div`
  padding: 1rem;
`;

const MiniProjectDescription = styled(StyledDiv)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  /* margin-top: 1rem; */
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
              <MiniProjectDescription>{project.summary}</MiniProjectDescription>
              <TechStack techData={project.techStck} />
            </MiniProjectDetails>
          </MiniProjectListItem>
        </Link>
      ))}
    </ProjectMiniContainer>
  );
}

export default ProjectMini;
