import "./Projects.css";
import React from "react";
import axios from "axios";

function Projects() {
    const [projName1, setProjName1] = React.useState();
    const [projText1, setProjText1] = React.useState();
    const [projSkill1, setProjSkill1] = React.useState();
    const [projImg1, setProjImg1] = React.useState();

    const [projName2, setProjName2] = React.useState();
    const [projText2, setProjText2] = React.useState();
    const [projSkill2, setProjSkill2] = React.useState();
    const [projImg2, setProjImg2] = React.useState();

    const [projName3, setProjName3] = React.useState();
    const [projText3, setProjText3] = React.useState();
    const [projSkill3, setProjSkill3] = React.useState();
    const [projImg3, setProjImg3] = React.useState();
    
    const [projName4, setProjName4] = React.useState();
    const [projText4, setProjText4] = React.useState();
    const [projSkill4, setProjSkill4] = React.useState();
    const [projImg4, setProjImg4] = React.useState();

    async function setProjects() {
        await axios.get("https://api.airtable.com/v0/appd2fxoj39r8R5yf/Projects?maxRecords=4&view=Grid%20view", {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        }).then((req) => {
            req.data.records.forEach((record) => {
                let data = record.fields;
                switch(data.Order) {
                    case 1:
                        setProjName1(data.Name);
                        setProjText1(data.Description);
                        setProjSkill1(data.Tags.join(" | "));
                        setProjImg1(data.Attachments[0].url);
                        break;
                    case 2:
                        setProjName2(data.Name);
                        setProjText2(data.Description);
                        setProjSkill2(data.Tags.join(" | "));
                        setProjImg2(data.Attachments[0].url);
                        break;
                    case 3:
                        setProjName3(data.Name);
                        setProjText3(data.Description);
                        setProjSkill3(data.Tags.join(" | "));
                        setProjImg3(data.Attachments[0].url);
                        break;
                    case 4:
                        setProjName4(data.Name);
                        setProjText4(data.Description);
                        setProjSkill4(data.Tags.join(" | "));
                        setProjImg4(data.Attachments[0].url);
                        break;
                }
            });
        });
    }

    React.useEffect(() => {
        setProjects();
    });

    

  return (
    <div className="projects" id="projects">
        <div className="project-header">
            Projects
            <div className="project-bar"></div>
        </div>

        <div className="project proj1">
            <div className="imgdiv">
                <div className="proj-img-left">
                    <img className="project-img" src={projImg1}></img>
                </div>
            </div>
            <div className="description-right">
                <div className="proj-subheader">{projName1}</div>
                <div className="proj-subline-right"></div>
                <div className="proj-description-right">
                    <div className="proj-text">
                        {projText1}
                    </div>
                </div>
                <div className="proj-skills">{projSkill1}</div>
            </div>
        </div>

        <div className="project proj2">
            <div className="description-left">
            <div className="proj-subheader">{projName2}</div>
                <div className="proj-subline-left"> </div>
                <div className="proj-description-left">
                    <div className="proj-text">
                        {projText2}
                    </div>
                </div>
                <div className="proj-skills">{projSkill2}</div>
            </div> 
            <div className="imgdiv">
                <div className="proj-img-right">
                    <img className="project-img" src={projImg2}></img>
                </div>
            </div>      
        </div>
        
        <div className="project proj3">
            <div className="imgdiv">
                <div className="proj-img-left">
                    <img className="project-img" src={projImg3}></img>
                </div>
            </div>
            <div className="description-right">
                <div className="proj-subheader">{projName3}</div>
                <div className="proj-subline-right"> </div>
                <div className="proj-description-right">
                    <div className="proj-text">
                        {projText3}
                    </div>
                </div>
                <div className="proj-skills">{projSkill3}</div>
            </div>
        </div>

        <div className="project proj4">
            <div className="description-left">
            <div className="proj-subheader">{projName4}</div>
                <div className="proj-subline-left"> </div>
                <div className="proj-description-left">
                    <div className="proj-text">
                        {projText4}
                    </div>
                </div>
                <div className="proj-skills">{projSkill4}</div>
            </div> 
            <div className="imgdiv">
                <div className="proj-img-right">
                    <img className="project-img" src={projImg4}></img>
                </div>
            </div>      
        </div>

    </div>
  );
}

export default Projects;
