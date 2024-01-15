import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import TechStack from "./TechStack";
import Button from "./Button";

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
//   flex-direction: column;
//   margin-top: 8rem;
//   gap: 5rem;
//   @media (max-width: 1240px) {
//     margin-top: 3rem;
//   }
// `;

// const Gif = styled.img`
//   width: 60%;
//   border-radius: 10px;
//   margin-right: 2rem;
//   padding: 15px;
// `;

// const ExplanationContainer = styled.div`
//   max-width: 40%;
//   font-size: 1.5rem;
// `;

// const GifContainer = styled.li`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   background-color: var(--color-grey-50);

//   @media (max-width: 1024px) {
//     flex-direction: column;
//   }
// `;

const GifsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  gap: 2rem;
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

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Gif = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const ExplanationContainer = styled.div`
  max-width: 100%;
  margin: auto;
  p {
    margin-top: 10px;
  }
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
        {project?.gifs?.map((gifInfo, index) => (
          <GifContainer key={index}>
            <Gif src={gifInfo.gif} alt={`GIF ${index + 1}`} />
            <ExplanationContainer>
              <StyledDiv>
                <strong>Explanation {index + 1}</strong>
              </StyledDiv>
              <p>{gifInfo.explanation}</p>
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

      <AdditionalInfo>
        <p>
          <strong>Additional Information:</strong> {project.additionalInfo}
        </p>
      </AdditionalInfo>
    </>
  );
}

export default ProjectDetail;
