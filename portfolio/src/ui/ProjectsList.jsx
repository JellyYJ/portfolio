import styled from "styled-components";
import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import TechStack from "./TechStack";
import Row from "./Row";

const projectsData = [
  {
    name: "Solar Offset",
    img: "src/assets/pizzaCo.png",
    details:
      "This project aimed to create a platform for UK residents to fund solar panels in African countries.",
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
  gap: 2rem;
`;

const ProjectListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 8rem;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  width: 60rem;
  height: auto;
  border-radius: 8px;
  margin-right: 4rem;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 100%; /* Make the image take full width on smaller screens */
    margin-right: 0; /* Remove right margin for smaller screens */
    margin-bottom: 2rem; /* Add some spacing between image and text on smaller screens */
  }
`;

const ProjectDetails = styled.div`
  max-width: 50rem;
`;

const ProjectDescription = styled(StyledDiv)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

function ProjectsList() {
  return (
    <ProjectsListContainer>
      <Heading as="h1">Projects.</Heading>
      {projectsData.map((project) => (
        // <Row type="horizontal" spacing="5rem" key={project.name}></Row>
        <ProjectListItem key={project.name}>
          <ProjectImage src={project.img} alt={project.name} />
          <ProjectDetails>
            <Heading as="h2">{project.name}</Heading>
            <ProjectDescription>{project.details}</ProjectDescription>
            <TechStack techData={project.techStck} />
          </ProjectDetails>
        </ProjectListItem>
      ))}
    </ProjectsListContainer>
  );
}

export default ProjectsList;
