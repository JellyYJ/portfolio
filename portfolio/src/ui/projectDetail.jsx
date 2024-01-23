import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import TechStack from "./TechStack";
import Popup from "./Popup";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectShowcase from "./ProjectShowcase";

import { useMoveBack } from "../hooks/useMoveBack";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`;

const GifsSectionTitle = styled(Heading)`
  font-size: 2.5rem;
  /* margin-bottom: 10px; */
  margin-right: auto;
`;

const GifsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  /* @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;

const AdditionalInfo = styled(StyledDiv)`
  /* font-size: 1.2rem; */
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
      <ProjectDetailsHeader project={project} moveBack={moveBack} />
      <StyledDiv role="paragraph">{project.details}</StyledDiv>
      <TechStack techData={project.techStck} />

      <GifsSectionTitle as="h3">Project Details</GifsSectionTitle>
      <GifsContainer>
        {project.gifs?.map((gifInfo, index) => (
          <ProjectShowcase
            key={index}
            gifInfo={{ ...gifInfo, index }}
            openModal={openModal}
          />
        ))}
      </GifsContainer>

      <Popup isOpen={modalOpen} onClose={closeModal}>
        {selectedGif && <img src={selectedGif} alt={selectedGif.gifTitle} />}
      </Popup>

      {project.features && (
        <StyledDiv>
          <Heading as="h4">Key Features</Heading>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </StyledDiv>
      )}

      <AdditionalInfo>
        <p>
          <strong>Additional Information:</strong> {project.additionalInfo}
        </p>
      </AdditionalInfo>
    </PageContainer>
  );
}

export default ProjectDetail;
