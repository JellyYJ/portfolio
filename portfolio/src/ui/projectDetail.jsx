import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";

import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import Popup from "./Popup";
import Button from "./Button";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectShowcase from "./ProjectShowcase";

import { useMoveBack } from "../hooks/useMoveBack";

const BackButton = styled(Button)`
  margin-right: auto;
`;

const GifsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Description = styled(StyledDiv)`
  font-size: 1.8rem;
`;

const FeaturesContainer = styled.div`
  margin-top: 20px;
`;

const FeatureHeading = styled(Heading)`
  margin-bottom: 10px;
`;

const AdditionalInfo = styled(StyledDiv)`
  font-size: 1.2rem;
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

  return (
    <>
      <BackButton variation="secondary" onClick={moveBack}>
        <IoMdArrowBack />
      </BackButton>

      <ProjectDetailsHeader project={project} moveBack={moveBack} />
      {/* <ProjectImage src={project.img} alt={project.name} /> */}
      {/* <Description>{project.summary}</Description> */}
      {/* <ProjectImage src={project.img2} alt={`${project.name} Demo`} /> */}
      {/* <StyledDiv fontSize="1.5rem">
        <strong>Project Walkthrough:</strong> {project.description}
      </StyledDiv> */}

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
        <FeaturesContainer>
          <FeatureHeading as="h4">Key Features</FeatureHeading>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </FeaturesContainer>
      )}

      <AdditionalInfo>
        <p>
          <strong>Additional Information:</strong> {project.additionalInfo}
        </p>
      </AdditionalInfo>
    </>
  );
}

export default ProjectDetail;
