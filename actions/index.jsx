// actions/index.js (or separate files for each action)
export const addToCart = (item) => {
    return {
      type: "ADD_TO_CART",
      payload: item,
    };
  };
  
  export const removeFromCart = (index) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: index,
    };
  };
  
  export const updateQuantity = (index, quantity) => {
    return {
      type: "UPDATE_QUANTITY",
      payload: { index, quantity },
    };
  };
  