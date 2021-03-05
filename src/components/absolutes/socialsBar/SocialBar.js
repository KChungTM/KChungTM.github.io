import "./SocialBar.css";
import GitHubLogo from "../../../assets/logos/GitHub.svg";
import Linkedin from "../../../assets/logos/Linkedin.svg";
import Instagram from "../../../assets/logos/Instagram.svg";
import Facebook from "../../../assets/logos/Facebook.svg";
import React from "react";
import axios from "axios";

function SocialBar() {
    const [github, setGitHubLink] = React.useState();
    const [linkedin, setLinkedinLink] = React.useState();
    const [facebook, setFacebookLink] = React.useState();
    const [instagram, setInstagramLink] = React.useState();

    async function setLinks() {
        await axios.get("https://api.airtable.com/v0/appd2fxoj39r8R5yf/Socials?maxRecords=4&view=Grid%20view", {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        }).then((req) => {
            req.data.records.forEach((record) => {
                let data = record.fields;
                switch(data.Name) {
                    case "github":
                        setGitHubLink(data.Link);
                        break;
                    case "linkedin":
                        setLinkedinLink(data.Link);
                        break;
                    case "facebook":
                        setFacebookLink(data.Link);
                        break;
                    case "instagram":
                        setInstagramLink(data.Link);
                        break;
                }
            });
        });
    }

    setLinks();

    return (
        <div className="social-container">
            <div className="social-bar">
                <a href={github}><img className="social" src={GitHubLogo} alt="GH Logo"></img></a>
                <a href={linkedin}><img className="social" src={Linkedin} alt="Linkedin Logo>"></img></a>
                <a href={instagram}><img className="social" src={Instagram} alt="Instagram Logo>"></img></a>
                <a href={facebook}><img className="social" src={Facebook} alt="Facebook Logo>"></img></a>
            </div>
        </div>
        
    );
} 

export default SocialBar;