// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductsSlice"; // Use the default export
import cartReducer from "./CartSlice"; 
const Store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer 
    }
});

export default Store;