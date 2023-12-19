import styled from "styled-components";
import Heading from "./Heading";
import Row from "./Row";

const IconField = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
  }
`;

const SkillCard = styled.div`
  display: grid;
  transition: color 0.3s ease;
  justify-items: center;

  &:hover {
    color: ${({ bgColor }) => bgColor};
  }
`;

export default function SkillIcons({ skillsData }) {
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
