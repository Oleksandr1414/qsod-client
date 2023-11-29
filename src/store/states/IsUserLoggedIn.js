import { createSlice } from "@reduxjs/toolkit";

export const isUserLoggedIn = createSlice({
  name: "IsUserLoggedIn",
  initialState: {
    value: false,
  },
  reducers: {
    setisUserLoggedIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const getisUserLoggedIn = (state) => {
  return state.isUserLoggedIn.value;
};

export const { setisUserLoggedIn } = isUserLoggedIn.actions;

export default isUserLoggedIn.reducer;
