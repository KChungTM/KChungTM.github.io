import "./SkillLabel.css";

function SkillLabel(prop){
   return (
        <div className="skilllabel">
            <div className="skill">
                {prop.text}
            </div>
            <div className="background">
                {prop.text}
            </div>
        </div>
   );
}

export default SkillLabel