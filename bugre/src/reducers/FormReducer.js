// formReducer.js
export const FormReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_FORM_DATA':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  