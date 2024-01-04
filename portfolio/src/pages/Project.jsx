import { useParams } from "react-router-dom";

function Project({ projectsData }) {
  const { projectName } = useParams();

  // Find the project with the matching name
  const project = projectsData.find((p) => p.name === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.details}</p>
    </div>
  );
}

export default Project;
