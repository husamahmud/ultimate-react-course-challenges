import './App.css';
import {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleOnChange(e) {
        const val = parseInt(e.target.value);
        setCount(val || 0);
    }

    function handleSteps(e) {
        setStep(parseInt(e.target.value))
    }

    const date = new Date('Oct 7 2002');
    date.setDate(date.getDate() + count);

    return (
        <div className='App'>
            <div className='wrapper'>
                <input type='range'
                       step='1'
                       min='1'
                       max='20'
                       value={step}
                       onChange={(e) => handleSteps(e)} />
                <p>{step}</p>
            </div>

            <div className='wrapper'>
                <button onClick={() => setCount((c) => c + step)}>&#43;</button>
                <input type='number'
                       value={count}
                       onChange={(e) => handleOnChange(e)} />
                <button onClick={() => setCount((c) => c - step)}>&#8722;</button>
            </div>

            <p>
                {date.toDateString()}
            </p>
        </div>
    )
}
