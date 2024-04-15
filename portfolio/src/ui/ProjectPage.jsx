import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import TechStack from "./TechStack";
import InstructionsList from "./InstructionsList";
import Popup from "./Popup";
import ProjectHeader from "./ProjectHeader";
import Details from "./ProjectDetails";

import { useMoveBack } from "../hooks/useMoveBack";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`;

const InfoContainer = styled.div`
  background-color: var(--color-grey-100);
  padding: 1rem 3rem;
  border-radius: 5px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  position: relative;
`;

const DetailsHeading = styled(Heading)`
  font-size: 3rem;
  margin-top: 3rem;
  margin-right: auto;
`;

const DetailsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const StyledLink = styled.a`
  &:hover {
    cursor: pointer;
    animation: jumpUpDown 0.5s infinite alternate;
  }

  @keyframes jumpUpDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;

function ProjectDetail({ project }) {
  const moveBack = useMoveBack();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGif, setSelectedGif] = useState(null);

  const openModal = (gif) => {
    setSelectedGif(gif);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedGif(null);
    setModalOpen(false);
  };

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <ProjectHeader project={project} moveBack={moveBack} />

      <InfoContainer>
        <StyledDiv>
          <strong>Date:</strong> {project?.date}
        </StyledDiv>

        {project?.projectLink && (
          <StyledLink
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </StyledLink>
        )}

        {project?.repo && (
          <StyledLink
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </StyledLink>
        )}
      </InfoContainer>

      <StyledDiv role="paragraph">{project.details}</StyledDiv>
      {project.how_to_use && (
        <InstructionsList instructions={project.how_to_use} />
      )}
      <TechStack techData={project.techStack} />

      <DetailsHeading as="h3">Project Details</DetailsHeading>
      <DetailsList>
        {project.gifs?.map((gifInfo, index) => (
          <Details
            key={index}
            gifInfo={{ ...gifInfo, index }}
            openModal={openModal}
          />
        ))}
      </DetailsList>

      <Popup isOpen={modalOpen} onClose={closeModal}>
        {selectedGif && <img src={selectedGif} alt={selectedGif.gifTitle} />}
      </Popup>
    </PageContainer>
  );
}

export default ProjectDetail;
