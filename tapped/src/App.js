import {useState} from 'react'
import './App.css';

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

function App() {
  return(
    <div>
      <Tapped content={content}/>
    </div>
  )
}

function Tapped ({content}){
  const [active,setactive] = useState(0)
  return(
    <div>
      <div className='tabs'>
        {[0,1,2].map((num)=>
        <Tab key={num} active={active} onClick={()=>setactive(num)} num={num}/> )}
      </div>
          
      <div>
        {active <=2 ? 
               <Tapcontent item={content[active]}/> :
        <Diff/>}
      </div>

    </div>
  )
}

function Tab ({num,active,onClick}) {
  return(
    <button className={active === num ? 'tab active' : "tab"} onClick={onClick}>
      Tab {num + 1}
    </button>
  )
}

function Tapcontent ({item}) {
  const [show,setshow] = useState(false)
  return(
    <div>
      <h4>{item.summary}</h4>
      {show && <p>{item.details}</p>}
      <button onClick={()=>setshow( !show )}>{!show ? 'show' : 'hide'} details</button>
    </div>
  )
}

function Diff (){
  return (
    <div>
      BAD
    </div>
  )
}
export default App;
