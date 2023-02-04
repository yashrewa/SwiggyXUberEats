import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            console.log(action.payload)
            // console.log(state.items)
            const nextCartItems = state.items.filter((cartItem)=>cartItem.id !== action.payload)
            // console.log(nextCartItems)
            state.items = nextCartItems;
        },
        clearCart: (state) => {
            state.items = [];
        },
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;