import styled from "styled-components";
import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import Button from "./Button";

const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoContainer = styled.div`
  background-color: var(--color-blue-50);
  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
`;

const DateInfo = styled(StyledDiv)`
  font-size: 1.5rem;
`;

function ProjectDetailsHeader({ project, moveBack }) {
  return (
    <ProjectHeaderContainer>
      <Heading as="h3">{project.name}</Heading>
      <InfoContainer>
        <DateInfo>
          <strong>Date:</strong> {project.date}
        </DateInfo>
        {project.projectLink && (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        )}
      </InfoContainer>
    </ProjectHeaderContainer>
  );
}

export default ProjectDetailsHeader;
