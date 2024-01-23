import { Link } from "react-router-dom";
import styled from "styled-components";
import projectsData from "../assets/data/projectData.json";
import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import TechStack from "./TechStack";

const ProjectsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* max-width: 110rem; */
  margin-top: 8rem;
  gap: 10rem;
  padding: 0 16px;

  @media (max-width: 1240px) {
    margin-top: 3rem;
  }
`;

const ProjectImage = styled.img`
  width: 80rem;
  height: auto;
  border-radius: 1.5rem;
  margin-right: 5rem;

  @media (max-width: 1240px) {
    width: 65rem;
  }

  @media (max-width: 1080px) {
    width: 65rem;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  @media (max-width: 795px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ProjectListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-brown-0);

  &:hover {
    ${ProjectImage} {
      transition: transform 0.3s ease-in-out;
      transform: translateY(-10px);
    }

    ${Heading} {
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        bottom: 5px;
        /* left: 0; */
        width: 0;
        height: 1.5px;
        background: linear-gradient(
          to right,
          var(--color-grey-700),
          transparent
        );
        transition: width 0.3s ease-in-out;
      }

      &:hover:before {
        width: 100%;
      }
    }
  }

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ProjectDetails = styled.div`
  max-width: 50rem;
`;

const ProjectDescription = styled(StyledDiv)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
`;

function ProjectsList() {
  // Filter out projects with type === "mini"
  const filteredProjects = projectsData.filter(
    (project) => project.type !== "mini"
  );

  return (
    <ProjectsListContainer>
      {filteredProjects.map((project) => (
        <Link to={`/projects${project.link}`} key={project.name}>
          <ProjectListItem key={project.name}>
            <ProjectImage src={project.img} alt={project.name} />
            <ProjectDetails>
              <Heading as="h3">{project.name}</Heading>
              <ProjectDescription>{project.summary}</ProjectDescription>
              <TechStack techData={project.techStck} />
            </ProjectDetails>
          </ProjectListItem>
        </Link>
      ))}
    </ProjectsListContainer>
  );
}

export default ProjectsList;
