import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
     
      const itemToAdd = action.payload;
      const existingItemIndex = state?.items?.findIndex(
        (item) => action.payload.id === item.id
      );

     

      if (existingItemIndex !== -1) {
        // console.log("item already exists");
        state.items[existingItemIndex].quantity += 1;
        state.total += action.payload.price;
      } else {
        state.items.push({ ...itemToAdd, quantity: 1 });
        state.total += action.payload.price;
      }
      
    },
    removeItem: (state, action) => {
      const nextCartItems = state.items.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.items = nextCartItems;
      state.total -= action.payload.price * action.payload.quantity
      console.log(action.payload.quantity)
    },
    increaseItem: (state, action) => {
      const itemId = action.payload.id;
      const updatedItems = state.items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      state.items = updatedItems;
      state.total += action.payload.price
    },
    clearCart: (state) => {
      state.items = [];
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload.id;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemId
      );

      if (state.items[existingItemIndex].quantity > 1) {
        state.items[existingItemIndex].quantity -= 1;
      } else {
        state.items.splice(existingItemIndex, 1);
        // return state.items;
      }
      state.total -= action.payload.price
    },
  },
});

export const { addItem, removeItem, clearCart, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
