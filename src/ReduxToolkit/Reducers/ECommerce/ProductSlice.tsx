import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductItemInterface, ProductSliceProp } from "../../../Types/EcommerceType";
import { Products } from "../../../JsonData";

const initialState: ProductSliceProp = {
  filterToggle: false,
  productItem: [],
};

export const fetchProductApiData = createAsyncThunk<ProductItemInterface[], void, {}>("/json-data/product", async () => {
  const response = await axios.get(Products);
  return response.data;
});

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setFilterToggle: (state) => {
      state.filterToggle = !state.filterToggle;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductApiData.fulfilled, (state, action) => {
      state.productItem = action.payload;
    });
  },
});
export const { setFilterToggle } = ProductSlice.actions;

export default ProductSlice.reducer;
