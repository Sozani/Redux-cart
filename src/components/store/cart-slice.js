import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({});
      }
    },
    removeItemFromCart() {},
  },
});
