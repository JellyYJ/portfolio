import React from "react";
import styled from "styled-components";

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.8rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    transition: all 0.3s;
  }
`;

const Icon = styled.div`
  display: flex;
  font-size: 3rem;
  padding: 1rem;
  /* background-color: var(--color-brown-50); */
  /* border-radius: 50%; */
`;

function ContactInfo({ infoData }) {
  return (
    <>
      {infoData.map((info, idx) => (
        <ContactItem key={idx}>
          <Icon>{info.icon}</Icon>
          {/* <Label as="h5">{info.label}:</Label> */}
          <p>{info.value}</p>
        </ContactItem>
      ))}
    </>
  );
}

export default ContactInfo;
