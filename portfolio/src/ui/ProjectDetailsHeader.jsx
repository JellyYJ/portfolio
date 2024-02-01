import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { IoMdArrowBack } from "react-icons/io";

const BackButton = styled(Button)`
  margin-right: auto;
  font-size: 1.8rem;
`;

const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

function ProjectDetailsHeader({ project, moveBack }) {
  return (
    <ProjectHeaderContainer>
      <BackButton variation="secondary" onClick={moveBack}>
        <IoMdArrowBack />
      </BackButton>

      <Heading as="h1">{project.name}</Heading>
    </ProjectHeaderContainer>
  );
}

export default ProjectDetailsHeader;
