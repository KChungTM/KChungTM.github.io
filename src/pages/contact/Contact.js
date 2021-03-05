import "./Contact.css";
import React, { useState } from 'react';

const airtable = require("airtable");
const base = new airtable({apiKey: process.env.REACT_APP_API_KEY}).base('appd2fxoj39r8R5yf');

function Contact() {
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();

    base('Contact').select({
        fields: ["Name", "Description"]
    }).eachPage(function page(records) {
        records.forEach(function(record) {
            if (record.fields.Name === "phone")
                setPhone(record.fields.Description);
            else
                setEmail(record.fields.Description);
        });
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

    let credit = "coded by Kennedy Chung <3 | 2021";

    return (
      <div className="contact" id="contact">
          <div className="contact-header">
              Contact
              <div className="contact-line"></div>
          </div>
          <div className="contact-greeting">
              Feel free to reach out and say hi!
          </div>
          <div className="contact-info-container">
              <div className="contact-outline">
                    <div className="contact-text">
                        <mark>Email:</mark> {email} <br/>
                        <mark>Phone:</mark> {phone}   
                    </div>
              </div>
          </div>
          <div className="credits">
              {credit}
          </div>
      </div>
    );
  }
  //<img className="photo" src={photo}></img>
  export default Contact;