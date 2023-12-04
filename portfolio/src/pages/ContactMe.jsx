import Row from "../ui/Row";
import Heading from "../ui/Heading";

function Contact() {
  return (
    <Row>
      <Heading as="h1">Contact.</Heading>
      <Row fontSize="2rem" spacing="5rem" maxWidth="70rem">
        <Heading as="h3">Hello~</Heading>
        <Heading as="h3">I'm Yijia Liu</Heading>
        <Row>
          <Heading as="h2">Notice Period</Heading>
          <p>
            Can start working from <strong>Jan. 2023</strong>
          </p>
        </Row>
        <Row>
          <Heading as="h2">Contact ME</Heading>
          <p>
            Can start working from <strong>Jan. 2023</strong>
          </p>
        </Row>
      </Row>
    </Row>
  );
}

export default Contact;
