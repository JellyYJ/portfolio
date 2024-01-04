import React from "react";
import Heading from "../../ui/Heading";
import StyledDiv from "../../ui/Paragraph";
import TechStack from "../../ui/TechStack";
import Button from "../../ui/Button";

import { useMoveBack } from "../../hooks/useMoveBack";

function ProjectDetail({ project }) {
  const moveBack = useMoveBack();

  return (
    <div>
      <Button variation="secondary" onClick={moveBack}>
        Back
      </Button>
      <Heading as="h3">{project.name}</Heading>
      <StyledDiv fontSize="1.8rem" marginBottom="1.5rem">
        {project.details}
      </StyledDiv>
      <TechStack techData={project.techStck} />
    </div>
  );
}

export default ProjectDetail;
