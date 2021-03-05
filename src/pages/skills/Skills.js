import "./Skills.css";
import SkillLabel from "../../components/skillLabel/SkillLabel";
import React from "react";
import axios from "axios";

function Skills() {
  let skillArr = [];
  const [skillState, setSkillState] = React.useState();

  async function getLabels() {
    await axios.get("https://api.airtable.com/v0/appd2fxoj39r8R5yf/Skills?maxRecords=15&view=Grid%20view", {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }).then((req) => {
          req.data.records.forEach((record) => {
            skillArr.push(record.fields.Name);
          });
          skillArr = skillArr.map((skill) => {
            return <SkillLabel text={skill} />
          });
          setSkillState(skillArr);
        });
  }

  getLabels();
  
  return (
    <div className="skills">
      <div className="skillheader">
        Skills
        <div className="line1"></div>
      </div>
      <div className="labels">
        {skillState}
      </div>
    </div>
  );
}

export default Skills;
