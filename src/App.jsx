import { useEffect, useRef, useState } from "react";
import Welcome from "./sections/Welcome";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import City from "./sections/City";
import Projects from "./sections/Projects";
import Settings from "./sections/Settings";
import Links from "./sections/Links";
import Skills from "./sections/Skills";
import Legal from "./sections/Legal";
import Background from "./components/Background";
import "./App.css";

function App() {
  const gridRef = useRef();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    const gridItems = gridRef.current.querySelectorAll(".grid > *");
    gridItems.forEach((item) => observer.observe(item));

    return () => {
      gridItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="container" id="scrollbar">
      <Background isDisabled={!isDrawing} />
      <div className="grid" ref={gridRef}>
        <Welcome />
        <AboutMe />
        <Projects />
        <Links />
        <Contact />
        <Skills />
        <City />
        <Settings isDrawing={isDrawing} setIsDrawing={setIsDrawing} />
        <Legal />
      </div>
    </div>
  );
}

export default App;
