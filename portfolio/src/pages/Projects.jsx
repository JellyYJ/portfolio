import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ProjectsList from "../ui/ProjectsList";

function Projects() {
  return (
    <>
      <Heading as="h1">Projects.</Heading>

      <Row type="horizontal">
        <ProjectsList></ProjectsList>
      </Row>
    </>
  );
}

export default Projects;
