import { createItem } from '../models/ItemModel';

export const addItem = (description, quantity, setItems) => {
  const newItem = createItem(description, quantity);
  setItems((items) => [...items, newItem]);
};

export const deleteItem = (id, setItems) => {
  setItems((items) => items.filter((item) => item.id !== id));
};

export const clearItems = (setItems) => {
  const confirmed = window.confirm('Are you sure');
  if (confirmed) setItems([]);
};

export const toggleItem = (id, setItems) => {
  setItems((items) =>
    items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    )
  );
};
