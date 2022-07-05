import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import constant from './constants'
import axios from 'axios';


const initialState = {
  value: [],
  productLength: 0,
  productIndex : [],
  cartQty : 0,
  loading : false
}

export const fetchproducts = createAsyncThunk(
  'cart/fetchproducts',
  async()=>{
  const response = await axios.get(constant.baseUrl + "/products");
    return response.data;
  }
)
debugger;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    userData: (state, action) => {
      debugger;
      state.value = action.payload;
      state.productLength = action.payload.length;
    },
    
    addProduct: (state, action) => {
      const newData = [...state.value];
      const newIndex = action.payload;
      state.productIndex = [newData[newIndex]];
    },

    addCartValue: (state, action) => {
      state.cartQty = action.payload;
    },

    incCartValue: (state, action) => {
      state.cartQty = action.payload;
    },

    decCartValue: (state, action) => {
      state.cartQty = action.payload;
    },

    clearCartValue: (state, action) => {
      state.cartQty = action.payload
    }
    
  },
  extraReducers : {
    [fetchproducts.pending]: (state) => {
      state.loading = true
    },
    [fetchproducts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.value = payload
    },
    [fetchproducts.rejected]: (state) => {
      state.loading = false
  },
}
})
debugger;
// Action creators are generated for each case reducer function
export const { userData, addProduct, addCartValue, incCartValue, decCartValue, clearCartValue} = cartSlice.actions

export default cartSlice.reducer

// API call using axios
// export const fetchproducts = ()=> async dispatch => {
//   const response = await axios.get(constant.baseUrl + "/products");
//   dispatch(userData(response.data));
// }


