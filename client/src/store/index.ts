import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./themeSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, cartReducer)


const store = configureStore({
    reducer: persistedReducer
})

let persistor = persistStore(store)

export {store, persistor}