import './App.css';
import React,{useState} from 'react';

const App=()=>{

  const [answer,setAnswer]=useState("");
  const clickHandler=(event)=>{
    setAnswer(answer.concat(event.target.value));
  }

  const clearScreen=()=>{
    setAnswer("");
  }

  const calculate=()=>{
    setAnswer(eval(answer).toString());
  }

  const deleteInput=()=>{
    setAnswer(answer.slice(0,-1).toString());
  }
  
  return(
    <div className="cal">
      <input type='text' id="ans" value={answer}/>
      <input type="button" value="C" className="btn btn3" onClick={clearScreen}/>
      <input type="button" value="Del" className="btn btn3" onClick={deleteInput}/>
      <input type="button" value="%" className="btn btn3" onClick={clickHandler}/>
      <input type="button" value="/" className="btn btn2" onClick={clickHandler}/>
      <input type="button" value="7" className="btn btn4" onClick={clickHandler} />
      <input type="button" value="8" className="btn btn4" onClick={clickHandler}/>
      <input type="button" value="9" className="btn btn4" onClick={clickHandler}/>
      <input type="button" value="*" className="btn btn2" onClick={clickHandler}/>
      <input type="button" value="4" className="btn btn4" onClick={clickHandler}/>
      <input type="button" value="5" className="btn btn4" onClick={clickHandler}/>
      <input type="button" value="6" className="btn btn4" onClick={clickHandler}/>
      <input type="button" value="-" className="btn btn2" onClick={clickHandler}/>
      <input type="button" value="1" className="btn btn4" onClick={clickHandler}/>
      <input type="button" value="2" className="btn btn4" onClick={clickHandler}/>
      <input type="button" value="3" className="btn btn4" onClick={clickHandler}/>
      <input type="button" value="+" className="btn btn2" onClick={clickHandler}/>
      <input type="button" value="0" className="btn btn1" onClick={clickHandler}/>
      <input type="button" value="." className="btn btn4" onClick={clickHandler}/>
      <input type="button" value="=" className="btn btn2" onClick={calculate}/>
      
    </div>
  )

}
export default App;
