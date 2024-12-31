import Welcome from "./sections/Welcome";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import City from "./sections/City";
import Projects from "./sections/Projects";
import Settings from "./sections/Settings";
import Links from "./sections/Links";
import Skills from "./sections/Skills";
import Legal from "./sections/Legal";
import './App.css';

function App() {

  // TODO: animate grid
  
  return (
    <div className="grid-container">
      <Welcome />
      <AboutMe />
      <Projects />
      <Skills />
      <Links />
      <Contact />
      <City />
      <Settings /> 
      <Legal />
    </div>
  )
}

export default App;