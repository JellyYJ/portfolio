import styled from "styled-components";

const IconField = styled.div`
  max-width: 60rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3.5rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: var(--color-brown-0); */
  border-radius: 9px;
  transition: background-color 0.3s ease;

  &:hover {
    color: ${({ bgColor }) => bgColor};
  }
`;

function SkillIcons({ skillsData }) {
  return (
    <IconField>
      {skillsData.map((skill, index) => (
        <SkillCard key={index} bgColor={skill.color}>
          {skill.icon}
          <span>{skill.name}</span>
        </SkillCard>
      ))}
    </IconField>
  );
}

export default SkillIcons;
