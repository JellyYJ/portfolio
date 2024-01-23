import ProjectsList from "../ui/ProjectsList";
import Heading from "../ui/Heading";
import ProjectMini from "../ui/ProjectMini";
import SplitLine from "../ui/SplitLine";

function Projects() {
  return (
    <>
      <Heading as="h1">Projects.</Heading>
      <ProjectsList />

      <Heading as="h2">Other Projects.</Heading>
      <ProjectMini />
    </>
  );
}

export default Projects;
