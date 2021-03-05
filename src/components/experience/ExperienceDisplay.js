import "./ExperienceDisplay.css";
import React, { useState } from 'react';
import axios from 'axios';

const airtable = require("airtable");
const base = new airtable({apiKey: process.env.REACT_APP_API_KEY}).base('appd2fxoj39r8R5yf');

function ExperienceDisplay(props) {
    const [experience1Name, setExpName1] = React.useState();
    const [experience1Title, setExpTitle1] = React.useState();
    const [experience1Time, setExpTime1] = React.useState();
    const [experience1Description, setExpText1] = React.useState();

    const [experience2Name, setExpName2] = React.useState();
    const [experience2Title, setExpTitle2] = React.useState();
    const [experience2Time, setExpTime2] = React.useState();
    const [experience2Description, setExpText2] = React.useState();

    const [experience3Name, setExpName3] = React.useState();
    const [experience3Title, setExpTitle3] = React.useState();
    const [experience3Time, setExpTime3] = React.useState();
    const [experience3Description, setExpText3] = React.useState();

    const [experience4Name, setExpName4] = React.useState();
    const [experience4Title, setExpTitle4] = React.useState();
    const [experience4Time, setExpTime4] = React.useState();
    const [experience4Description, setExpText4] = React.useState();

    const [experience5Name, setExpName5] = React.useState();
    const [experience5Title, setExpTitle5] = React.useState();
    const [experience5Time, setExpTime5] = React.useState();
    const [experience5Description, setExpText5] = React.useState();

    const [barState1, setBar1] = React.useState("clickedBar");
    const [barState2, setBar2] = React.useState("hiddenBar");
    const [barState3, setBar3] = React.useState("hiddenBar");
    const [barState4, setBar4] = React.useState("hiddenBar");
    const [barState5, setBar5] = React.useState("hiddenBar");

    const [buttState1, setButt1] = React.useState("clickedButton");
    const [buttState2, setButt2] = React.useState("hiddenButton");
    const [buttState3, setButt3] = React.useState("hiddenButton");
    const [buttState4, setButt4] = React.useState("hiddenButton");
    const [buttState5, setButt5] = React.useState("hiddenButton");

    const [title, setTitle] = React.useState();
    const [time, setTime] = React.useState();
    const [description, setText] = React.useState();

    const [runOnce, setRunOnce] = React.useState(true);

    async function setExperiences() {
        await axios.get('https://api.airtable.com/v0/appd2fxoj39r8R5yf/Experiences?maxRecords=5&view=Grid%20view', {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        }).then((req) => {
                req.data.records.forEach((record) => {
                let data = record.fields;
                switch(record.fields.Order) {
                    case 1:
                        setExpName1(data.Name);
                        setExpTitle1(data.Title);
                        setExpTime1(data.Time);
                        setExpText1(data.Description);
                        break;
                    case 2:
                        setExpName2(data.Name);
                        setExpTitle2(data.Title);
                        setExpTime2(data.Time);
                        setExpText2(data.Description);
                        break;
                    case 3:
                        setExpName3(data.Name);
                        setExpTitle3(data.Title);
                        setExpTime3(data.Time);
                        setExpText3(data.Description);
                        break;
                    case 4:
                        setExpName4(data.Name);
                        setExpTitle4(data.Title);
                        setExpTime4(data.Time);
                        setExpText4(data.Description);
                        break;
                    case 5:
                        setExpName5(data.Name);
                        setExpTitle5(data.Title);
                        setExpTime5(data.Time);
                        setExpText5(data.Description);
                        break;
                    default:
                        setExpName1(data.Name);
                        setExpTitle1(data.Title);
                        setExpTime1(data.Time);
                        setExpText1(data.Description);
                }      
            });
            if (runOnce) {
                setTitle(experience1Title);
                setTime(experience1Time);
                setText(experience1Description);
                setRunOnce(false);
            }
        });
    };

    React.useEffect(() => {
        setExperiences();
    });

    return (
        <div className="experience-container">
            <div className="experience-line">
                <div className={`bar-segment ${barState1}`}></div>
                <div className={`bar-segment ${barState2}`}></div>
                <div className={`bar-segment ${barState3}`}></div>
                <div className={`bar-segment ${barState4}`}></div>
                <div className={`bar-segment ${barState5}`}></div>
            </div>
            <div className="experience-buttons">
                <button className={`expbutt ${buttState1}`} onClick={() => {
                    setText(experience1Description);
                    setTitle(experience1Title);
                    setTime(experience1Time);
                    setBar1("clickedBar");
                    setBar2("hiddenBar");
                    setBar3("hiddenBar");
                    setBar4("hiddenBar");
                    setBar5("hiddenBar");
                    setButt1("clickedButton");
                    setButt2("hiddenButton");
                    setButt3("hiddenButton");
                    setButt4("hiddenButton");
                    setButt5("hiddenButton");
                    }}>
                        {experience1Name}
                </button>
                <button className={`expbutt ${buttState2}`} onClick={() => {
                    setText(experience2Description);
                    setTitle(experience2Title);
                    setTime(experience2Time);
                    setBar1("hiddenBar");
                    setBar2("clickedBar");
                    setBar3("hiddenBar");
                    setBar4("hiddenBar");
                    setBar5("hiddenBar");
                    setButt1("hiddenButton");
                    setButt2("clickedButton");
                    setButt3("hiddenButton");
                    setButt4("hiddenButton");
                    setButt5("hiddenButton");
                    }}>
                        {experience2Name}
                </button>
                <button className={`expbutt ${buttState3}`} onClick={() => {
                    setText(experience3Description);
                    setTitle(experience3Title);
                    setTime(experience3Time);
                    setBar1("hiddenBar");
                    setBar2("hiddenBar");
                    setBar3("clickedBar");
                    setBar4("hiddenBar");
                    setBar5("hiddenBar");
                    setButt1("hiddenButton");
                    setButt2("hiddenButton");
                    setButt3("clickedButton");
                    setButt4("hiddenButton");
                    setButt5("hiddenButton");
                    }}>
                        {experience3Name}
                </button>
                <button className={`expbutt ${buttState4}`} onClick={() => {
                    setText(experience4Description);
                    setTitle(experience4Title);
                    setTime(experience4Time);
                    setBar1("hiddenBar");
                    setBar2("hiddenBar");
                    setBar3("hiddenBar");
                    setBar4("clickedBar");
                    setBar5("hiddenBar");
                    setButt1("hiddenButton");
                    setButt2("hiddenButton");
                    setButt3("hiddenButton");
                    setButt4("clickedButton");
                    setButt5("hiddenButton");
                    }}>
                        {experience4Name}
                </button>
                <button className={`expbutt ${buttState5}`} onClick={() => {
                    setText(experience5Description);
                    setTitle(experience5Title);
                    setTime(experience5Time);
                    setBar1("hiddenBar");
                    setBar2("hiddenBar");
                    setBar3("hiddenBar");
                    setBar4("hiddenBar");
                    setBar5("clickedBar");
                    setButt1("hiddenButton");
                    setButt2("hiddenButton");
                    setButt3("hiddenButton");
                    setButt4("hiddenButton");
                    setButt5("clickedButton");
                    }}>
                        {experience5Name}
                </button>
            </div>
            <div className="experience-textbox">
                <div className="title">{title}</div>
                <div className="time">{time}</div>
                <div className="text">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ExperienceDisplay;