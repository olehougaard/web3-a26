import { useState } from 'react'

import './App.css';

function Adder() {
  const [addend, setAddend] = useState(0)
  const [sum, setSum] = useState(0)

  const updateAddend = e => setAddend(parseInt(e.target.value))
  const add = () => setSum(sum => sum + addend)
  const reset = () => setSum(0)

  return (<div>
    <div>Number to add: <input type = 'number' value={addend} onChange={updateAddend}/></div>
    <div>Sum: {sum}</div>
    <div>
      <button onClick={add}>Add</button>
      <button onClick={reset}>Reset</button>
    </div>
  </div>)
}

function App() {
  return <div>
    <h1>Adder</h1>
    <Adder/>
  </div>
}

export default App;
