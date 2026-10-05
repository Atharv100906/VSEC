
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(5);

  function incl() {
    setCount(count + 2);
    console.log(count);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incl}>Click me</button>
    </>
    
  );
}

export default App;

