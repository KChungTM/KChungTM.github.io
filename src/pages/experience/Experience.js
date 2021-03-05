import "./Experience.css";
import ExperienceDisplay from "../../components/experience/ExperienceDisplay"

function Experience() {
    return (
      <div className="experience" id="experience">
          <div className="experience-header">
                Experience
                <div className="experience-bar"></div>
          </div>
          <ExperienceDisplay/>
      </div>
    );
  }
  
  export default Experience;