import styled from "styled-components";

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const TechItem = styled.span`
  background-color: var(--color-grey-50);
  padding: 0.5rem;
  border-radius: 4px;
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
