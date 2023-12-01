import styled from "styled-components";
import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import TechStack from "./TechStack";

const projectsData = [
  {
    name: "Solar Offset",
    img: "src/assets/pizzaCo.png",
    details:
      "This project aimed to create a platform for UK residents to fund solar panels in African countries",
    techStck: ["JavaScript", "React,", "Node.jS", "MongoDB", "CSS"],
  },
  {
    name: "Holidy Cabin",
    img: "",
    details: "",
    techStck: ["JavaScript", "React,", "Supabase", "Styled Components"],
  },
  {
    name: "Bird Sighting",
    img: "",
    details: "",
    techStck: ["JavaScript", "Node.jS", "MongoDB", "CSS"],
  },
  {
    name: "Heartbeat Classification",
    img: "",
    details: "",
    techStck: ["Python", "Numpy", "Matoplot", "PyTorch", "TensorFlow"],
  },
  {
    name: "Step Counter",
    img: "",
    details: "",
    techStck: ["Java"],
  },
];

const ProjectsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ProjectListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10rem;
`;

const ProjectImage = styled.img`
  width: 60rem;
  height: auto;
  border-radius: 8px;
  margin-right: 4rem;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 50rem;
    height: auto;
  }
`;

const ProjectDetails = styled.div`
  flex: 1;
`;

function ProjectsList() {
  if (!projectsData) return;

  return (
    <ProjectsListContainer>
      {projectsData.map((project) => (
        <ProjectListItem key={project.name}>
          <ProjectImage src={project.img} alt={project.name} />
          <ProjectDetails>
            <Heading as="h2">{project.name}</Heading>
            <StyledDiv role="paragraph">{project.details}</StyledDiv>
            <TechStack techData={project.techStck} />
          </ProjectDetails>
        </ProjectListItem>
      ))}
    </ProjectsListContainer>
  );
}

export default ProjectsList;
