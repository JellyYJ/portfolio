import React, { useState } from "react";
import styled from "styled-components";
import projectsData from "../assets/data/projectData.json";
import Heading from "./Heading";
import Popup from "./Popup";

const ProjectMiniContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MiniProjectListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-0);
`;

const MiniProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
  cursor: pointer; /* Add cursor pointer for better UX */
`;

const MiniProjectDetails = styled.div`
  margin-top: 1rem;
`;

function ProjectMini() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const miniProjects = projectsData.filter(
    (project) => project.type === "mini"
  );

  const openModal = (project) => {
    setSelectedProject(project);
    console.log(project.gifs.gifTitle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <>
      <ProjectMiniContainer>
        {miniProjects.map((project) => (
          <MiniProjectListItem
            key={project.name}
            onClick={() => openModal(project)}
          >
            <MiniProjectImage src={project.img} alt={project.name} />
            <MiniProjectDetails>
              <Heading as="h4">{project.name}</Heading>
            </MiniProjectDetails>
          </MiniProjectListItem>
        ))}
      </ProjectMiniContainer>

      <Popup isOpen={modalOpen} onClose={closeModal}>
        {selectedProject && (
          <>
            <Heading as="h2">{selectedProject.name}</Heading>
            {selectedProject.gifs && selectedProject.gifs.length > 0 && (
              <img
                src={selectedProject.gifs[0].gif}
                alt={selectedProject.name}
              />
            )}
          </>
        )}
      </Popup>
    </>
  );
}

export default ProjectMini;
