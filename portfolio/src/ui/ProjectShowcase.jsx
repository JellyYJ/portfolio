import styled from "styled-components";

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

    /* flex-direction: ${({ reverse }) =>
      (reverse ? "row-reverse" : "row").toString()};
    align-items: flex-start; */
  }
`;

const GifImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0px;
  }
`;

const GifTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ExplanationContainer = styled.div`
  max-width: 100%;
  margin: auto;
  text-align: left;
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
