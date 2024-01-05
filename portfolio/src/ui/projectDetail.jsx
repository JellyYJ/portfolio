import React from "react";
import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import TechStack from "./TechStack";
import Button from "./Button";

import { useMoveBack } from "../hooks/useMoveBack";

function ProjectDetail({ project }) {
  const moveBack = useMoveBack();

  return (
    <>
      <Button variation="secondary" onClick={moveBack}>
        Back
      </Button>
      <Heading as="h3">{project.name}</Heading>
      <StyledDiv fontSize="1.8rem" marginBottom="1.5rem">
        {project.details}
      </StyledDiv>
      <TechStack techData={project.techStck} />
    </>
  );
}

export default ProjectDetail;
