import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer: themeSlice
})

export default store