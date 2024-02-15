import styled from "styled-components";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import ContactInfo from "./ContactInfo";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5rem;
  width: 60%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 15rem;
    transition: all 0.3s;
  }
`;

const infoData = [
  { icon: <MdEmail />, label: "Email", value: "LYJ10000H@gmail.com" },
  {
    icon: <MdLocationOn />,
    label: "Address",
    value: "Newcastle Upon Tyne",
  },
  { icon: <MdPhone />, label: "Phone", value: "07529981054" },
];

function ContactInfoContainer() {
  return (
    <Container>
      <ContactInfo infoData={infoData} />
    </Container>
  );
}

export default ContactInfoContainer;
