import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: []
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {


    addtoCart: (state, action) => {
    //   const itemIndex = state.carts.findIndex((item) => item._id === action.payload._id);
    //   // console.log(itemIndex)
    //   if (itemIndex >= 0) {

    //     state.carts[itemIndex].qnty += 1;
    //   } else {

    //     const temp = { ...action.payload, qnty: 1 };
    //     state.carts = [...state.carts, temp];
    //   }
    state.carts = [...state.carts, action.payload];

    },
    // removeItemformCart: (state, action) => {
    //   state.carts = state.carts.filter(item => item._id !== action.payload._id);
    // },
    // removeSingleIteams: (state, action) => {
    //   const iteamIndex_dec = state.carts.findIndex((item) => item._id === action.payload._id);

    //   if (state.carts[iteamIndex_dec].qnty >= 1) {
    //     state.carts[iteamIndex_dec].qnty -= 1
    //   }

    // },



  }
})
export default cartSlice.reducer
export const { addtoCart, removeItemformCart, removeSingleIteams } = cartSlice.actions