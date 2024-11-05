import React, { useReducer,useState } from "react";
import "./App.css";
function Countnumbeer(state, action) {
  switch (action.type) {
    case "increament":
      return state + 1;
    case "delete":
      return Math.max(state-1,0);
    case "merge" :
      return state + action.value;
    default:
      return state;
  }
}
function App() {
  const [count, setcount] = useReducer(Countnumbeer, 0);
  const [input,setinput] = useState('')

  function handleform(e){
    e.preventDefault()
    const number = parseInt(input,10);
    if(!isNaN(number)){
      setcount({type:'merge',value:number})
      setinput('')
    }
    
  }
  return (
    <form onSubmit={handleform}>
    <div className="App">
      <label>num: {count}</label>
      <button onClick={() => setcount({ type: "increament" })}>plus</button>
      <button onClick={() => setcount({ type: "delete"})}>De</button>
      <input type='text' value={input} onChange={(e)=>setinput(e.target.value)}/>
      <button type="submit">submit</button>
    </div>
    </form>
  );
}
export default App;
