import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: []
  },
  reducers: {
    addCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload);
      state.cartItems.push(action.payload)
    },
    removeCart: state => {
        state.cartItems.push({})
    },
  }
})

// Action creators are generated for each case reducer function
export const { addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer