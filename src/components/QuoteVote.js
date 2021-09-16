import React, {useState} from 'react';

const QuoteVote = () => {
    const[count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };
    return (
      <div className="quoteVote">
      <button onClick={increment}>Up</button>
      {count}
      <button onClick={decrement}>Down</button>
      </div>
    )
  }
  export default QuoteVote;