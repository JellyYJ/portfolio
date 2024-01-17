import React from "react";
import ProjectDetail from "../ui/ProjectDetail";
import { useParams } from "react-router-dom";
import projectsData from "../assets/data/projectData.json";

// const Project = () => {
function Project() {
  const { projectName } = useParams();
  const project = projectsData.find((p) => p.link === `/${projectName}`);

  // console.log(project);

  return <ProjectDetail project={project} />;
}

export default Project;
