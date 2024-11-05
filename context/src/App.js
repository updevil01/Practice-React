import messageContext from './context/Messagecontext';
import './App.css';
import { useContext } from 'react';

function App() {
  const message = 'Hello World'
  return (
    <div className="App">
      <messageContext.Provider value={message}>
        <ComA></ComA>
      </messageContext.Provider>
    </div>
  );
}

function ComA (){
return(
  <ComB/>
)
}
function ComB (){
  const test = useContext(messageContext)
  return (
    <div>
      message : {test}
    </div>
  )
}

export default App;
