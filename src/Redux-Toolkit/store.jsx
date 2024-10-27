// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductsSlice"; // Use the default export

const Store = configureStore({
    reducer: {
        products: productReducer // Use the imported reducer
    }
});

export default Store;