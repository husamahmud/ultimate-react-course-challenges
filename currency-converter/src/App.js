import { useEffect, useState } from 'react';

export default function App() {
  const [from, setFrom] = useState('EUR');
  const [to, setTo] = useState('USD');
  const [input, setInput] = useState(1);
  const [output, setOutput] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCurrency() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${input}&from=${from}&to=${to}`,
        );
        const data = await res.json();

        setOutput(data.rates[to]);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    if (to === from) return setOutput(input);
    fetchCurrency().catch(err => console.error(err));
  }, [input, to, from]);

  return (
    <div className="app">
      <input type="text"
             value={input}
             onChange={(e) => setInput(Number(e.target.value))}
             style={{ height: '1rem' }} />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <select value={from}
                onChange={e => setFrom(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select value={to}
                onChange={e => setTo(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      {isLoading
        ? <p>Loading..</p>
        : <p>{output}</p>}
    </div>
  );
}
