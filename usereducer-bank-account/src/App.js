import { useReducer } from 'react';

const initialState = {
  balance: 0,
  loan: 0,
  isLoaned: false,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'openAccount':
      return {
        ...state,
        isActive: true,
        balance: 500,
      };
    case 'deposit':
      return {
        ...state,
        balance: state.balance + 150,
      };
    case 'withdraw':
      return {
        ...state,
        balance: state.balance > 0
          ? state.balance - 50
          : state.balance,
      };
    case 'requestLoan':
      return {
        ...state,
        balance: state.balance + 5000,
        loan: state.loan + 5000,
        isLoaned: true,
      };
    case 'payLoan':
      return {
        ...state,
        balance: state.balance - 5000,
        loan: 0,
        isLoaned: false,
      };
    case'closeAccount':
      return {
        ...initialState,
      };
    default:
      throw new Error('Unknown action');
  }
}

export default function App() {
  const [{ balance, loan, isActive, isLoaned }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h3><code>useReducer</code> Bank Account</h3>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button onClick={() => dispatch({ type: 'openAccount' })}
                disabled={isActive}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'deposit' })}
                disabled={!isActive}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'withdraw' })}
                disabled={!isActive || !balance}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'requestLoan' })}
                disabled={!isActive || isLoaned || balance > 5000}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'payLoan' })}
                disabled={!isActive || !isLoaned || balance < 5000}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'closeAccount' })}
                disabled={!isActive || balance || isLoaned}>
          Close account
        </button>
      </p>
    </div>
  );
}
