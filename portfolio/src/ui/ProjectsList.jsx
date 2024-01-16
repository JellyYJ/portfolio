import { Link } from "react-router-dom";
import styled from "styled-components";
import projectsData from "../assets/data/projectData.json";
import Heading from "./Heading";
import StyledDiv from "./Paragraph";
import TechStack from "./TechStack";

// const projectsData = [
//   {
//     name: "Holiday Cabin",
//     img: "src/assets/worldWise.png",
//     link: "/holidayCabin",
//     details:
//       "This project is a real-world like porject intimate the inside website for a booking system for cabins.",
//     techStck: ["JavaScript", "React", "Supabase", "Styled Components"],
//   },
//   {
//     name: "Solar Offset",
//     img: "src/assets/pizzaCo.png",
//     link: "/solarOffset",
//     details:
//       "This project aimed to create a platform for UK residents to fund solar panels in African countries.",
//     techStck: ["JavaScript", "React", "Node.jS", "MongoDB", "CSS"],
//   },
//   {
//     name: "Bird Sighting",
//     img: "",
//     link: "/birdSighting",
//     details:
//       "Uni project: allowing bird lovers to upload and view sightings of birds, also support offline and online real-time chatting, the chat history will be syncced once the user is connected to the internet.",
//     techStck: ["JavaScript", "Node.jS", "MongoDB", "CSS"],
//   },
//   {
//     name: "React Lizza.co",
//     img: "src/assets/pizzaCo.png",
//     link: "/reactPizza",
//     details:
//       "This project is a practice project for learning React and Tailwind.",
//     techStck: ["JavaScript", "React,", "Tailwind"],
//   },
//   {
//     name: "Heartbeat Classification",
//     img: "",
//     link: "/heartbeatClassification",
//     details: "",
//     techStck: ["Python", "Numpy", "Matoplot", "PyTorch", "TensorFlow"],
//   },
//   {
//     name: "Step Counter",
//     img: "",
//     link: "/stepCounter",
//     details: "",
//     techStck: ["Java"],
//   },
// ];

const ProjectsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* max-width: 110rem; */
  margin-top: 8rem;
  gap: 10rem;
  padding: 0 16px;

  @media (max-width: 1240px) {
    margin-top: 3rem;
  }
`;

const ProjectImage = styled.img`
  width: 80rem;
  height: auto;
  border-radius: 1.5rem;
  margin-right: 5rem;

  @media (max-width: 1240px) {
    width: 65rem;
  }

  @media (max-width: 1024px) {
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

const ProjectListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-brown-0);

  &:hover {
    ${ProjectImage} {
      transition: transform 0.3s ease-in-out;
      transform: translateY(-10px);
    }

    ${Heading} {
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        bottom: 5px;
        /* left: 0; */
        width: 0;
        height: 1.5px;
        background: linear-gradient(
          to right,
          var(--color-grey-700),
          transparent
        );
        transition: width 0.3s ease-in-out;
      }

      &:hover:before {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ProjectDetails = styled.div`
  max-width: 50rem;
`;

const ProjectDescription = styled(StyledDiv)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
`;

function ProjectsList() {
  return (
    <ProjectsListContainer>
      {projectsData.map((project) => (
        <Link to={`/projects${project.link}`} key={project.name}>
          <ProjectListItem key={project.name}>
            <ProjectImage src={project.img} alt={project.name} />
            <ProjectDetails>
              <Heading as="h3">{project.name}</Heading>
              <ProjectDescription>{project.summary}</ProjectDescription>
              <TechStack techData={project.techStck} />
            </ProjectDetails>
          </ProjectListItem>
        </Link>
      ))}
    </ProjectsListContainer>
  );
}

export default ProjectsList;
