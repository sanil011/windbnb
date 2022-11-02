import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
    middleware: [thunk]
  }
});


export const persistor = persistStore(store);