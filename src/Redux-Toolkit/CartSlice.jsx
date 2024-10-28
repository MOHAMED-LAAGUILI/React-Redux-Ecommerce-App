import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    // Decrease the quantity of an item in the cart
    decreaseFromCart(state, action) {
      const id = action.payload;
      const itemIndex = state.products.find((item) => item.id === id);
      if (itemIndex) {
        // Check if quantity is greater than 1 to prevent negative quantity
        if (itemIndex.quantity > 1) {
          itemIndex.quantity--;
          itemIndex.totalPrice -= itemIndex.price;
        } else {
          // If quantity is 1, remove the item from the cart
          state.products = state.products.filter((item) => item.id !== id);
        }
        state.totalQuantity--;
        state.totalPrice -= itemIndex.price;
      }
    },

    // Remove an item completely from the cart
    removeFromCart(state, action) {
      const id = action.payload;
      const itemIndex = state.products.find((item) => item.id === id);
      if (itemIndex) {
        state.totalQuantity -= itemIndex.quantity;
        state.totalPrice -= itemIndex.totalPrice;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseFromCart } = cartSlice.actions;
export default cartSlice.reducer;
