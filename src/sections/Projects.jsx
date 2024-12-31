import { useState } from "react";
import Card from "../components/Card.jsx";
import "../styles/Projects.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FidgetSpinner } from "react-loader-spinner";

function Projects() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const Portfolio = () => {
    return (
      <div className="portfolio" style={{ display: currentIndex === 0 ? "flex" : "none" }}>
        <img src="/folio.png" alt="portfolio" width="85%"/>
        <p>A React app showcasing my work, including a dynamic CSS grid layout and interactive designs. Built with Vite and hosted via Github Pages.</p>
      </div>
    );
  };
  
  const Bounce = () => {
    return (
      <div className="bounce" style={{ display: currentIndex === 1 ? "flex" : "none" }}>
        <video  src="/bounce_demo.MOV" autoPlay loop playsInline />
        <p> An iOS arcade game built with Swift and published to the App Store featuring monetized ads, leaderboard, and achievements.</p>
      </div>
    );
  };
  
  const Loader = () => {
    return (
      <div className="spinner" style={{ display: currentIndex === 2 ? "flex" : "none" }}>
        <FidgetSpinner height={200} width={440} backgroundColor="var(--highlight-color)" ballColors={["var(--text-color)", "var(--text-color)", "var(--text-color)"]}/>
      </div>
    );
  };

  const projects = [
    {
      title: "This Portfolio",
      project: <Portfolio />,
    },
    {
      title: "bounce.",
      project: <Bounce />,
    },
    {
      title: "work in progress",
      project: <Loader />,
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const { title } = projects[currentIndex];

  return (
    <Card title="some of my projects" gridArea="projects" minHeight="400px" >
      <div className="project-controls">
        <button onClick={prevProject} className="icon">
          <MdNavigateBefore size={32}/>
        </button>
        <h3 className="title">{title}</h3>
        <button onClick={nextProject} className="icon">
          <MdNavigateNext size={32}/>
        </button>
      </div>
      {projects.map((project) => project.project)}
    </Card>
  );
}

export default Projects;
