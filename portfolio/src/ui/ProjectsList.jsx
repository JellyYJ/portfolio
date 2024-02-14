import styled from "styled-components";
import projectsData from "../assets/data/projectData.json";
import ProjectsListItem from "./ProjectsListItem";

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

function ProjectsList() {
  const filteredProjects = projectsData.filter(
    (project) => project.type !== "mini"
  );

  return (
    <ProjectsListContainer direction="column" maxWidth="120rem">
      {filteredProjects.map((project) => (
        <ProjectsListItem project={project} key={project.name} />
      ))}
    </ProjectsListContainer>
  );
}

export default ProjectsList;
