import './App.css';
import { useState } from 'react';
import { addItem, deleteItem, clearItems, toggleItem } from './controllers/ItemController';
import Form from './components/Form';
import Task from './components/Task';
import Stats from './components/Stats';
import Logo from './components/Logo';

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={(description, quantity) => addItem(description, quantity, setItems)} />
      <Task
        items={items}
        handleDelete={(id) => deleteItem(id, setItems)}
        handleToggle={(id) => toggleItem(id, setItems)}
        handleClearData={() => clearItems(setItems)}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
