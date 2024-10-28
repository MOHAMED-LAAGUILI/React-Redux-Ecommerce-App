import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: "",
  filteredData: [],
  selectedProduct: null, // Add this line to track the selected product
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
    setSelectedProduct(state, action) { // New action for setting the selected product
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, setSearchTerm, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
