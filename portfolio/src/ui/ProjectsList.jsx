import { Link } from "react-router-dom";
import styled from "styled-components";
import projectsData from "../assets/data/projectData.json";
import Heading from "./Heading";
import TechStack from "./TechStack";

const ProjectsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 10rem;
  padding: 0 16px;
  transition: margin-top 0.3s;
  margin-bottom: 5rem;

  @media (max-width: 1240px) {
    margin-top: 3rem;
  }
`;

const ProjectImage = styled.img`
  position: relative;
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

const ConstructionIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px; /* Adjust size as needed */
  height: auto;
`;

const ProjectListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-grey-0);

  ${Heading} {
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      bottom: 5px;
      width: 0;
      height: 2px;
      background: linear-gradient(var(--color-grey-700), transparent);
      transition: width 0.3s ease-in-out;
    }
  }

  &:hover {
    ${ProjectImage} {
      transition: transform 0.3s ease-in-out;
      box-shadow: 1rem 1rem 3rem var(--color-brown-100);
      transform: translateY(-10px);
    }

    ${Heading} {
      &:before {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const ProjectDescription = styled.div`
  font-size: 1.8rem;
`;

function ProjectsList() {
  const filteredProjects = projectsData.filter(
    (project) => project.type !== "mini"
  );

  return (
    <ProjectsListContainer direction="column" maxWidth="120rem">
      {filteredProjects.map((project) => (
        <Link
          to={project.status === "Ongoing" ? "#" : `/projects${project.link}`}
          key={project.name}
          style={{
            pointerEvents: project.status === "Ongoing" ? "none" : "auto",
          }}
        >
          <ProjectListItem key={project.name}>
            <ProjectImage src={project.img} alt={project.name} />
            {project.status === "Ongoing" && (
              <ConstructionIcon
                src="/src/assets/construction_symbol.png"
                alt="Under construction"
              />
            )}
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
