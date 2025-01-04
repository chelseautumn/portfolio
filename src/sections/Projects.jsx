import { useState } from "react";
import Card from "../components/Card.jsx";
import "../styles/Projects.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FidgetSpinner } from "react-loader-spinner";
import { GoArrowUpRight } from "react-icons/go";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Portfolio = () => {
    return (
      <div className="portfolio">
        <a href="https://github.com/chelseautumn/portfolio">
          <img src="/folio.webp" alt="portfolio" />
        </a>
        <p>
          A portfolio made with React showcasing my work, including a dynamic
          CSS grid layout and interactive designs.
        </p>
      </div>
    );
  };

  const Trip = () => {
    return (
      <a className="trip" href="https://travel.chlsea.com">
        <p>
          Designed to help users create and manage itineraries, track expenses,
          and share with others. Built with Next.js.
        </p>
        <img src="/trip-planner.webp" alt="trip planner" />
      </a>
    );
  };

  const Bounce = () => {
    return (
      <div className="bounce">
        <video src="/bounce_demo.mp4" muted autoPlay loop playsInline />
        <p>
          {" "}
          An iOS arcade game built with Swift and published to the App Store
          featuring monetized ads, leaderboard, and achievements.
        </p>
      </div>
    );
  };

  const Loader = () => {
    return (
      <div className="spinner">
        <FidgetSpinner
          height={200}
          width={440}
          backgroundColor="var(--highlight-color)"
          ballColors={[
            "var(--text-color)",
            "var(--text-color)",
            "var(--text-color)",
          ]}
        />
      </div>
    );
  };

  const projects = [
    {
      title: "This Portfolio",
      project: <Portfolio />,
    },
    {
      title: "PlanIt - Trip Planner",
      project: <Trip />,
    },
    {
      title: "bounce.",
      project: <Bounce />,
    },
    {
      title: "work in progress",
      project: <Loader />,
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  const { title, project } = projects[currentIndex];

  return (
    <Card title="some of my projects" gridArea="projects" minHeight="400px">
      <div className="project-controls">
        <button onClick={prevProject} className="icon">
          <MdNavigateBefore size={32} />
        </button>
        <h3 className="title">{title}</h3>
        <button onClick={nextProject} className="icon">
          <MdNavigateNext size={32} />
        </button>
      </div>
      {project}
    </Card>
  );
}

export default Projects;
