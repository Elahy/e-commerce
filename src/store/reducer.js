import data from '../data'
const initialState = {
    productList: data.products,
    currentProduct: null,
  };
  console.log(data.products)
  const myReducer = (state = initialState, action) => {
    if (action.type === "UPDATE_PRODUCT_LIST") {
      return { ...state, productList: action.payload };
    } else if (action.type === "SET_CURRENT_PRODUCT") {
      return { ...state, currentProduct: action.payload };
    } else {
      return state;
    }
  };
  
  export default myReducer;
  