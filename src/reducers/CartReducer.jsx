const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        const updatedItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cartItems: updatedItems,
        };
      }
  
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
      break;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (_, index) => index !== action.payload
        ),
      };
      break;
    case "UPDATE_QUANTITY":
      const updatedCartItems = state.cartItems.map((item, index) => {
        if (index === action.payload.index) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItems,
      };
      break;
    default:
      return state;
  }
};

export default cartReducer;
