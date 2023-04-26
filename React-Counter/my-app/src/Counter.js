import { useState } from 'react';
import './App.css';

function Counter() {
    
const [count, setCount] = useState(0)

const Increment = () =>{setCount(count + 1)}

const Decrement = () =>{setCount(count - 1)}

return (
    <div className="counter">
      <button onClick={Increment}>Increment</button>
      <h5>Counter: {count}</h5>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default Counter;