import { useState, useMemo } from "react";
import Card from "../components/Card.jsx";
import "../styles/Projects.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FidgetSpinner } from "react-loader-spinner";

function Projects() {

  const Portfolio = () => {
    return (
      <div className="portfolio">
        <img src="/folio.png" alt="portfolio" width="85%"/>
        <p>A React app showcasing my work, including a dynamic CSS grid layout and interactive designs. Built with Vite and hosted via Github Pages.</p>
      </div>
    );
  };
  
  const Bounce = () => {
    return (
      <div className="bounce">
        <video src="/bounce_demo.MOV" autoPlay loop playsInline />
        <p>An iOS arcade game built with Swift and published to the App Store featuring monetized ads, leaderboard, and achievements.</p>
      </div>
    );
  }
  
  const Loader = () => {
    return (
      <div className="spinner">
        <FidgetSpinner height={200} width={440} backgroundColor="var(--highlight-color)" ballColors={["var(--text-color)", "var(--text-color)", "var(--text-color)"]}/>
      </div>
    );
  }

  const projects = useMemo(() => [
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
  ], [Portfolio, Bounce, Loader]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const { title, project } = projects[currentIndex];

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
      {project}
    </Card>
  );
}

export default Projects;
