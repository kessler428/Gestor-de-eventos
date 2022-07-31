import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import {
  asistenceSlice,
  authSlice,
  catalogsSlice,
  orderSlice,
  uiSlice
} from "./slices";

const reducers = combineReducers({
  ui: uiSlice.reducer,
  auth: authSlice.reducer,
  catalogs: catalogsSlice.reducer,
  order: orderSlice.reducer,
  asistence: asistenceSlice.reducer,
});

const rootPersistConfig = {
  key:'root',
  storage,
}

const persistedReducer = persistReducer(rootPersistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
