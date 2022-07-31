import { createSlice } from "@reduxjs/toolkit";

export const catalogsSlice = createSlice({
  name: "catalogs",
  initialState: {
    serviceCatalog: [],
    identificationCatalog: [],
  },
  reducers: {
    setServiceCatalog: (state, action) => {
      state.serviceCatalog = action.payload;
    },
    setIdentificationCatalog: (state, action) => {
      state.identificationCatalog = action.payload;
    },
  },
});

export const { setServiceCatalog, setIdentificationCatalog } =
  catalogsSlice.actions;
