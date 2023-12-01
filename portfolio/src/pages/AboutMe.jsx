import { useState, useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import StyledDiv from "../ui/Paragraph";
import SkillIcons from "../ui/SkillIcons";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const iconSize = 38;

const skillsData = [
  { name: "HTML", icon: <FaHtml5 size={iconSize} />, color: "#E44D26" },
  { name: "CSS", icon: <FaCss3 size={iconSize} />, color: "#1572B6" },
  { name: "React", icon: <FaReact size={iconSize} />, color: "#61DAFB" },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript size={iconSize} />,
    color: "#F7DF1E",
  },
  { name: "Java", icon: <FaJava size={iconSize} />, color: "#007396" },
  { name: "Node.js", icon: <FaNodeJs size={iconSize} />, color: "#339933" },
  { name: "Python", icon: <FaPython size={iconSize} />, color: "#3776AB" },
];

function AboutMe() {
  const [curTime, setCurTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentHour = curTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <Row>
      <Heading as="h1">{greeting}.</Heading>
      <StyledDiv role="paragraph">
        Hello! I'm Yijia Liu, a recent Computer Science graduate with hands-on
        experience in <strong>full-stack web development</strong> and
        <strong> machine learning</strong> projects. I'm eager to contribute my
        passion and skills to real-world projects.
      </StyledDiv>

      <StyledDiv role="skillBucket">
        <Heading as="h2">My Skill Bucket</Heading>
        <SkillIcons skillsData={skillsData} />
      </StyledDiv>
    </Row>
  );
}

export default AboutMe;
