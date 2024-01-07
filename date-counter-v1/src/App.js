import './App.css';
import {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date('Mar 12 2002');
    date.setDate(date.getDate() + count);

    return (
        <div className="App">
            <div className="wrapper">
                <button onClick={() => setStep((s) => s + 1)}>&#43;</button>
                Steps: {step}
                <button onClick={() => setStep((s) => s - 1)}>&#8722;</button>
            </div>

            <br />

            <div className="wrapper">
                <button onClick={() => setCount((c) => c + step)}>&#43;</button>
                Count: {count}
                <button onClick={() => setCount((c) => c - step)}>&#8722;</button>
            </div>

            <p>{date.toDateString()}</p>
        </div>
    )
}
