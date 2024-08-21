export const inittialState = {
  son: 9,
  wishlist: [],
  cart: [],
  token: null,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, son: state.son + 1 };
    case "ADD_TO_WISHLIST":
      let Index = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (Index < 0) {
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      } else {
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }
    case "CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
