
import './App.css';
import {useState} from 'react'
import Keypad from './keypad';
function App() {
  let [input,setInput]=useState("")
  function handleClick(value){
      setInput(input+value)
  }
  function calculate(value){
   let outputEval=eval(input)
   setInput(outputEval)
  }

  function handleClear(){
    setInput("");
  }
  return (
    <div className="container">
        <h1>Calculator App with React</h1>
        <div className="calculator">
            <input type="text"  value={input} className="output"/>
            <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
        </div>
    </div>
  );
}

export default App;
