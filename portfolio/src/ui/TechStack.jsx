import styled from "styled-components";

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const TechItem = styled.span`
  background-color: var(--color-brown-50);
  padding: 0.5rem;
  border-radius: 8px;
`;

function TeckStack({ techData }) {
  if (!techData) return;
  return (
    <TechContainer>
      {techData.map((tech) => (
        <TechItem key={tech}> {tech}</TechItem>
      ))}
    </TechContainer>
  );
}

export default TeckStack;
