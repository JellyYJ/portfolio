import React from "react";
import ProjectPage from "../ui/ProjectPage";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectData.json";

function Project() {
  const { projectName } = useParams();
  const project = projectsData.find((p) => p.link === `/${projectName}`);

  return <ProjectPage project={project} />;
}

export default Project;
