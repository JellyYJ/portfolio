import React, { useState } from "react";
import styled from "styled-components";
import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import Button from "./Button";
import Popup from "./Popup";

import { useMoveBack } from "../hooks/useMoveBack";

const BackButton = styled(Button)`
  margin-right: auto;
`;

const ProjectHeader = styled.div`
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

// const GifsContainer = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   max-width: 120rem;
//   gap: 2rem;
// `;

// const GifContainer = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: var(--color-grey-50);
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     align-items: flex-start;
//   }
// `;

const GifsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GifContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-50);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  gap: 2rem;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: flex-start;
  }
`;

const Gif = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
  /* margin: ${({ reverse }) => (reverse ? "0 0 0 20px" : "0 20px 0 0")}; */

  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0px;
  }
`;

const GifTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: bold;
  /* margin-bottom: 10px; */
`;

const ExplanationText = styled.p`
  font-size: 1.7rem;
  line-height: 1.4;
`;

const ExplanationContainer = styled.div`
  max-width: 100%;
  margin: auto;
  text-align: left;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const DateInfo = styled(StyledDiv)`
  font-size: 1.5rem;
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
        Back
      </BackButton>

      <ProjectHeader>
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
      </ProjectHeader>

      {/* <ProjectImage src={project.img} alt={project.name} /> */}
      {/* <Description>{project.summary}</Description> */}
      {/* <ProjectImage src={project.img2} alt={`${project.name} Demo`} /> */}
      {/* <StyledDiv fontSize="1.5rem">
        <strong>Project Walkthrough:</strong> {project.description}
      </StyledDiv> */}

      <GifsContainer>
        {project.gifs?.map((gifInfo, index) => (
          <GifContainer
            key={index}
            reverse={index % 2 === 1}
            onClick={() => openModal(gifInfo.gif)}
          >
            <Gif
              src={gifInfo.gif}
              alt={gifInfo?.gifTitle}
              reverse={index % 2 === 1}
            />

            <ExplanationContainer>
              <GifTitle>{gifInfo.gifTitle}</GifTitle>
              <ExplanationText>{gifInfo.explanation}</ExplanationText>
            </ExplanationContainer>
          </GifContainer>
        ))}
      </GifsContainer>

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

      <Popup isOpen={modalOpen} onClose={closeModal}>
        {selectedGif && <img src={selectedGif} alt={selectedGif.gifTitle} />}
      </Popup>

      <AdditionalInfo>
        <p>
          <strong>Additional Information:</strong> {project.additionalInfo}
        </p>
      </AdditionalInfo>
    </>
  );
}

export default ProjectDetail;
