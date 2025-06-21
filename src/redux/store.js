// This file configures the Redux store for the application.
// It combines the cart and search slices into a single store.
// This file configures the Redux store for the application.

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer,
    },
});

export default store;