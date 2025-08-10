import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter, setCounter] = useState(1);
  const[message, setMessage] = useState('');

  const addValue = () => {
     if(counter < 20){
    setCounter(counter + 1)
    setMessage('');
  }else{
    setMessage('Counter is full')
  }
  }
  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1)
    setMessage('');
  }else{
    setMessage('Counter is already at 0')
  }

  }
  return (
    <>
    <h1>Hello Suraj</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove value {counter}</button>
    {message && <p style={{color:'red', marginTop:'10px'}}>{message}</p>}
    </>    
  )
}

export default App
