import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    listOrders: [],
    getOneOrder: [],
    pagination: {},
    creationSuccess:false,
  },
  reducers: {
    setListOrder: (state, action) => {
      state.listOrders = action.payload;
    },
    setGetOneOrder: (state, action) => {
      state.getOneOrder = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setSuccess: (state, action) => {
      state.creationSuccess = action.payload;
    }
  },
});

export const { setListOrder, setGetOneOrder, setPagination, setSuccess } = orderSlice.actions;
