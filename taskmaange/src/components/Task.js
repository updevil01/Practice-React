// src/components/PackingList.js
import { useState } from 'react';
import Item from './Item';

function Tasklist({ items, handleDelete, handleToggle, handleClearData }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  else if (sortBy === 'description') sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === 'checked') sortedItems = [...items].sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} handleDelete={handleDelete} handleToggle={handleToggle} />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input</option>
          <option value='description'>Sort by description</option>
          <option value='checked'>Check stats</option>
        </select>
        <button onClick={handleClearData}>Clear</button>
      </div>
    </div>
  );
}

export default Tasklist;
