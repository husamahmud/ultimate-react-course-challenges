import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState('amazing');
  const [friendtip, setFriendTip] = useState('amazing');

  function handleInputBill(e) {
    setBill(e);
  }

  function handleRate(e) {
    setTip(e);
  }

  function handleFrientRate(e) {
    setFriendTip(e);
  }

  function calcTotalTip() {
    const tipPercentage = getTipPercentage(tip);
    const friendtipPercentage = getTipPercentage(friendtip);
    return bill * ((tipPercentage + friendtipPercentage) / 2) / 100;
  }

  const getTipPercentage = (rating) => {
    switch (rating) {
      case 'amazing':
        return 20;
      case 'good':
        return 10;
      case 'okay':
        return 5;
      default:
        return 0;
    }
  };

  function handleReset() {
    setBill(0);
    setTip('amazing');
    setFriendTip('amazing');
  }

  return (
    <div className="App">
      <InputBill bill={bill}
                 onBill={handleInputBill} />
      <ServiceRate tip={tip}
                   onRate={handleRate}>
        <p>How did you like the service?</p>
      </ServiceRate>
      <ServiceRate friendtip={friendtip}
                   onRate={handleFrientRate}>
        <p>How did your friend like the service?</p>
      </ServiceRate>
      <Check bill={bill}
             totalTip={calcTotalTip()}
             onReset={handleReset} />
    </div>
  );
}

function InputBill({ bill, onBill }) {
  return (
    <div className="input">
      <p>How much was the bill?</p>
      <input type="text"
             value={bill}
             onChange={(e) => onBill(Number(e.target.value))} />
    </div>
  );
}

function ServiceRate({ tip, onRate, children }) {
  return (
    <div className="input">
      {children}
      <select value={tip}
              onChange={e => onRate(e.target.value)}>
        <option value="amazing">Absolutely Amazing! (20%)</option>
        <option value="good">It was good (10%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="dissatisfied">Dissatisfied (0%)</option>
      </select>
    </div>
  );
}

function Check({ bill, totalTip, onReset }) {
  if (bill == 0)
    return;

  return (
    <div className="check">
      <p>You pay ${bill + totalTip} ( ${bill} + ${totalTip} tip )</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
