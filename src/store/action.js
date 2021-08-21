export const setListofProduct = (productList) => ({
  type: "UPDATE_PRODUCT_LIST",
  payload: productList,
});

export const setCartItem = (product) => ({
  type: "SET_CART_ITEM",
  payload: product,
});
