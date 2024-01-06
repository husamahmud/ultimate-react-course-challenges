import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import avatar from "./pic.jpeg";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

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
            {skills.map(skill => (
                <Skill skillObj={skill}
                       key={skill.skill} />
            ))}
        </div>
    );
}

function Skill({skillObj}) {
    let emoji;
    
    if (skillObj.level === 'advanced') emoji = '💪'
    else if (skillObj.level === 'intermediate') emoji = '👍'
    else if (skillObj.level === 'beginner') emoji = '👶'

    return (
        <div className="skill"
             style={{backgroundColor: skillObj.color}}>
            <p>{skillObj.skill}</p>
            <span>{emoji}</span>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
