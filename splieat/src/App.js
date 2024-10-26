import './App.css';
import {useState} from 'react'
const initialFriends = [
  {
    id: 118836,
    name: "A",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -900,
  },
  {
    id: 933372,
    name: "B",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "C",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [isOpen,SetisOpen] = useState(false);
  const [friendSS,SetfriendSS] = useState(initialFriends)
  const [selectedFriend,setselectedFriend] = useState(null)

  const handleAdd=(friend)=>{
    SetfriendSS([...friendSS,friend])
    SetisOpen(false)
  }
  const handleselect=(friend)=>{
    setselectedFriend((c)=> c && c.id === friend.id ? null : friend)
  }
  
  const handleSpiltBill=(value)=>{
    SetfriendSS((friendSS)=>
      friendSS.map((friend)=>
        friend.id === selectedFriend.id ? {...friend,balance : friend.balance + value} : friend
    ))
    setselectedFriend(null)
  }

  return(
    <div className='app'>
    <div className='sidebar'>
      <FriendList
       friend={friendSS}  
       onSelection={handleselect}
       selectedFriend={selectedFriend} />
      {isOpen &&
      <FormAdd 
      handleAdd={handleAdd}
      />
      }
      <Button 
      onClick={()=>SetisOpen(!isOpen)}>{!isOpen ? "Add" : "Close"}
      </Button>
    </div>
    {selectedFriend &&
    <FormSplit selectedFriend={selectedFriend} onSplitBill={handleSpiltBill}/>
    }
  </div>
  )

}
function Button ({children, onClick}){
  return (
    <button className="button" onClick={onClick}>{children}</button>
  )
}


function FriendList({friend,onSelection,selectedFriend}) {
  return (
    <ul>
      {friend.map((friend)=>
          <Friends friend={friend} key={friend.id} 
            onSelection={onSelection}
           selectedFriend={selectedFriend}/>
      )}
    </ul>
  )
}

function Friends ({friend,onSelection,selectedFriend}){
  const isSelected = selectedFriend && selectedFriend.id === friend.id;
  return(
    <div>
      <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && 
      <p className="red">นายเป็นหนี้ {friend.name} {Math.abs(friend.balance)} บาท</p>
      }
      {friend.balance > 0 && 
      <p className="green">{friend.name} ติดหนี้นายอยู่ {Math.abs(friend.balance)}</p>
      }
      {friend.balance === 0 && 
      <p className="gray">ไม่ได้ติดหนี้นายนะสหาย</p>
      }
          <Button onClick={()=>onSelection(friend)}>{isSelected ? 'close' : 'select'}</Button>
      </li>
    </div>
  )
}
function FormAdd({handleAdd}) {
  const [name,setname] = useState('')
  const [image,setimage] =useState('https://i.pravatar.cc/48')
  const handleSubmit =(e)=>{
    e.preventDefault();
    const id = crypto.randomUUID()
    const newuser ={
      id : id,
      name,
      image : `${image}?=${id}`,
      balance:0
    }
    handleAdd(newuser)
    setname('')
    setimage('https://i.pravatar.cc/48')
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>X Friend</label>
      <input type="text" onChange={(c)=>setname(c.target.value)} value={name} />
      <label>X Img url:</label>
      <input type="text" onChange={(c)=>setimage(c.target.value)} value={image} />
      <Button>Add</Button>
    </form>
  );
}

function FormSplit ({selectedFriend,onSplitBill}){
  const [Bill,setBill] = useState('')
  const [paidByUser,setpaidByUser] = useState('')
  const result = Bill ? Bill - paidByUser : ''
  const [WhoIsPay,setWhoIsPay] = useState('user')

  function handleSubmit (e){
    e.preventDefault()
    if(!Bill || ! paidByUser) return
    onSplitBill(WhoIsPay === 'user' ? result : -paidByUser )
  }
  return(
    <form className="form-split-bill" onSubmit={handleSubmit}>
    <h2>Split a bill with {selectedFriend.name}</h2>
    <label>Bill value</label>
    <input type="text" value={Bill} onChange={(e)=>setBill(Number(e.target.value))}/>
    <label>Your expense</label>
    <input type="text" value={paidByUser}
     onChange={(e)=>
     setpaidByUser(Number(e.target.value) > Bill ? paidByUser : Number(e.target.value))}
     />

    <label>{selectedFriend.name}'s  exponse</label>
    <input type="text" value={result} disabled/>
    <label>Who will pay bill</label>
    <select
    value={WhoIsPay}
    onChange={(e)=>setWhoIsPay(e.target.value)}
    >
      <option value="user">you</option>
      <option value="friend">{selectedFriend.name}</option>
    </select>
    <Button>Split bill</Button>
  </form>
  )
}
export default App;
