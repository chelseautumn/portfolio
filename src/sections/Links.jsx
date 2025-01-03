import Card from "../components/Card.jsx";
import "../styles/Links.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
function Links() {

    return (
      <Card gridArea="links" minHeight="80px">
        <a
            href="/chelsea-verheyen-resume-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
        >
            <button>
                <h2 className="title">see my resume</h2>
                <GoArrowUpRight size={24} />
            </button>
      </a>
        <div className="links">
        <a 
        href="https://github.com/chelseautumn/" 
        target="_blank"
        aria-label="github"
        className="icon"
        >
            <FaGithub size={32} />
        </a>
        <a 
        href="https://www.linkedin.com/in/chelsea-verheyen/" 
        target="_blank"
        aria-label="linkedin" 
        className="icon"
        >
            <FaLinkedin size={32} />
        </a>
        <a
            href="mailto:chelsea.a.verheyen@gmail.com"
            aria-label="email"
            className="icon"
        >
        <MdEmail size={32} />
      </a>
      </div>
      </Card>
    )
  }
  
  export default Links;