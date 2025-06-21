// Description: Redux slice for managing search queries in the application.
// This slice allows setting and updating the search query used for filtering products.

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions; 
export default searchSlice.reducer;
