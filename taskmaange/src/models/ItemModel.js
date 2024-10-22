export const createItem = (description, quantity) => {
    return {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
  };
  