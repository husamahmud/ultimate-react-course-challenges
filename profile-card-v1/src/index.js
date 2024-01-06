import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import avatar from "./pic.jpeg";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <Skills />
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <div className="avatar">
            <img src={avatar}
                 alt="avatar" />
        </div>
    );
}

function Intro() {
    return (
        <div className="data">
            <h1>Hüsam Mahmud</h1>
            <p>Full-Stack SWE, EEE Student</p>
        </div>
    );
}

function Skills() {
    return (
        <div className="skills">
            <Skill skillName="HTML & CSS"
                   emoji="☝🏻"
                   backgroundColor="#f77f00" />
            <Skill skillName="JavaScript"
                   emoji="✌🏻"
                   backgroundColor="#2a9d8f" />
            <Skill skillName="Git & Github"
                   emoji="🖖🏻"
                   backgroundColor="#e63946" />
            <Skill skillName="ReactJS"
                   emoji="🤟🏻"
                   backgroundColor="#118ab2" />
        </div>
    );
}

function Skill(props) {
    return (
        <div className="skill"
             style={{backgroundColor: props.backgroundColor}}>
            <p>{props.skillName}</p>
            <span>{props.emoji}</span>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
