import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";
import TechStack from "./TechStack";
// import { LuConstruction } from "react-icons/lu";

const ProjectImage = styled.img`
  position: relative;
  width: 80rem;
  height: auto;
  border-radius: 1.5rem;
  margin-right: 5rem;
  filter: ${(props) => (props.ongoing ? "blur(2px)" : "none")};

  @media (max-width: 1240px) {
    width: 65rem;
  }

  @media (max-width: 1080px) {
    width: 65rem;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  @media (max-width: 795px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ProjectListItemContainer = styled.li`
  position: relative; /* Added to set the position context for absolute positioning */
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-grey-0);

  ${Heading} {
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      bottom: 5px;
      width: 0;
      height: 2px;
      background: linear-gradient(var(--color-grey-700), transparent);
      transition: width 0.3s ease-in-out;
    }
  }

  &:hover {
    ${ProjectImage} {
      transition: transform 0.3s ease-in-out;
      box-shadow: 1rem 1rem 3rem var(--color-brown-100);
      transform: translateY(-10px);
    }

    ${Heading} {
      &:before {
        width: 100%;
      }
    }
  }

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ProjectDetails = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const ProjectDescription = styled.div`
  font-size: 1.8rem;
`;

// const ConstructionIcon = styled(LuConstruction)`
//   position: absolute;
//   top: 18rem;
//   right: 30rem;
//   font-size: 5rem;
// `;

function ProjectsListItem({ project }) {
  return (
    <Link
      to={project.status === "Ongoing" ? "#" : `/projects${project.link}`}
      style={{
        pointerEvents: project.status === "Ongoing" ? "none" : "auto",
      }}
    >
      <ProjectListItemContainer>
        <ProjectImage
          src={project.img}
          alt={project.name}
          ongoing={project.status === "Ongoing"}
        />

        <ProjectDetails>
          <Heading as="h3">{project.name}</Heading>
          <ProjectDescription>{project.summary}</ProjectDescription>
          <TechStack techData={project.techStack} />
        </ProjectDetails>
      </ProjectListItemContainer>
    </Link>
  );
}

export default ProjectsListItem;
