import "./About.css";
import React, { useState } from 'react';
import photo from "../../assets/photo.jpg";

const airtable = require("airtable");
const base = new airtable({apiKey: process.env.REACT_APP_API_KEY}).base('appd2fxoj39r8R5yf');

function About() {
    const [blurbText, setBlurb] = React.useState("");
    const [photoSrc, setPhotoSrc] = React.useState(photo);

    base('About').find('recruoH3nnNhpuXR8', function(err, record) {
      if (err) { console.error(err); return; }
      setBlurb(record.fields.Description);
      setPhotoSrc(record.fields.Attachments[0].url);
    });

    return (
      <div className="about" id="about">
          <div className="about-header">
              <div className="about-header-text">
                About Me
              </div>
              <div className="about-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text-container">
              <div className="about-text">
                  <div className="msg">
                    {blurbText}
                  </div>
              </div>
            </div>
            <div className="about-img">
              <img className="photo" src={photoSrc}></img>
            </div>
          </div>
          
      </div>
    );
  }
  //<img className="photo" src={photo}></img>
  export default About;