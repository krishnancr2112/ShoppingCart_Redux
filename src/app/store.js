import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../app/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
debugger;
 