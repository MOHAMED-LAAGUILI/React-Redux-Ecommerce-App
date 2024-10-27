import { createSlice } from "@reduxjs/toolkit";

const initialeState = {
    products:[],
}

const productSlice = createSlice({
    name: 'products',
    initialState:initialeState,
    reducers:{
        setProducts(state,action){
            state.products = action.payload;
            }
            }
})

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;

