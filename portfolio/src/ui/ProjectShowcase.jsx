import styled from "styled-components";

const GifContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-50);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 3rem;

  /* IF use grid view */
  /* @media (min-width: 1240px) { */
  @media (min-width: 876px) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  }
`;

const GifImage = styled.img`
  width: 60%;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 1240px) {
    width: 50%;
  }

  ${GifContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ExplanationContainer = styled.div`
  max-width: 100%;
  /* margin: auto; */
  /* text-align: left; */
`;

const GifTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 8px;
  font-weight: bold;
`;

const ExplanationText = styled.p`
  font-size: 1.7rem;
  line-height: 1.4;
`;

function ProjectShowcase({ gifInfo, openModal }) {
  return (
    // <GifsContainer>
    <GifContainer
      // reverse={String(gifInfo.index % 2 === 1)}
      reverse={gifInfo?.index % 2 === 1}
      onClick={() => openModal(gifInfo.gif)}
    >
      <GifImage src={gifInfo.gif} alt={gifInfo?.gifTitle} />
      <ExplanationContainer>
        <GifTitle>{gifInfo.gifTitle}</GifTitle>
        <ExplanationText>{gifInfo.explanation}</ExplanationText>
      </ExplanationContainer>
    </GifContainer>
    // </GifsContainer>
  );
}

export default ProjectShowcase;
