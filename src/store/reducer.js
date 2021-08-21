import data from "../data";
const initialState = {
  productList: data.products,
  cartItems: 0,
};
console.log(data.products);
const myReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_PRODUCT_LIST") {
    return { ...state, productList: action.payload };
  } else if (action.type === "SET_CART_ITEM") {
    return { ...state, cartItems: 1 };
  } else {
    return state;
  }
};

export default myReducer;
