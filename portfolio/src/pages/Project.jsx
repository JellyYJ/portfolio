import React from "react";
import ProjectDetail from "../ui/ProjectDetail";
import { useParams } from "react-router-dom";
import projectsData from "../assets/data/projectData.json";

function Project() {
  const { projectName } = useParams();
  const project = projectsData.find((p) => p.link === `/${projectName}`);

  return <ProjectDetail project={project} />;
}

export default Project;
