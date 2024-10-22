// src/components/Item.js
const Item = ({ item, handleDelete, handleToggle }) => {
    return (
      <li>
        <input
          type='checkbox'
          checked={item.packed}
          onChange={() => handleToggle(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description} - {item.quantity}
        </span>
        <button onClick={() => handleDelete(item.id)}>x</button>
      </li>
    );
  };
  
  export default Item;
  