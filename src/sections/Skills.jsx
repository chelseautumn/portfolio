import Card from "../components/Card.jsx";
import "../styles/Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaAws,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiSwift } from "react-icons/si";
import { useState } from "react";

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState("");
  const iconSize = 32;
  const skills = [
    { icon: <FaReact size={iconSize} />, label: "React" },
    { icon: <FaNodeJs size={iconSize} />, label: "Node.js" },
    { icon: <SiTypescript size={iconSize} />, label: "TypeScript" },
    { icon: <SiJavascript size={iconSize} />, label: "JavaScript" },
    { icon: <FaHtml5 size={iconSize} />, label: "HTML" },
    { icon: <FaCss3Alt size={iconSize} />, label: "CSS" },
    { icon: <FaPython size={iconSize} />, label: "Python" },
    { icon: <FaJava size={iconSize} />, label: "Java" },
    { icon: <SiSwift size={iconSize} />, label: "Swift" },
    { icon: <FaAws size={iconSize} />, label: "AWS" },
  ];

  return (
    <Card title="some of my skills" gridArea="skills" minHeight="72px">
      <div className="skills-row">
        {skills.map((skill, index) => (
          <div
            onMouseLeave={() => setHoveredSkill("")}
            onMouseEnter={() => setHoveredSkill(skill.label)}
            key={index}
            className="icon skills-item"
          >
            {skill.icon}
            {hoveredSkill === skill.label && (
              <div className="tooltip">{hoveredSkill}</div>
            )}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            onMouseLeave={() => setHoveredSkill("")}
            onMouseEnter={() => setHoveredSkill(skill.label)}
            key={index}
            className="icon skills-item"
          >
            {skill.icon}
            {hoveredSkill === skill.label && (
              <div className="tooltip">{hoveredSkill}</div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Skills;
