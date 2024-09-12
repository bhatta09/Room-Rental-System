import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: "",
  email: "",
  address: "",
  phoneNumber: "",
};

const verifyUserSlice = createSlice({
  name: "verifyuser",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.phoneNumber = action.payload.phoneNumber;
    },
    clearUser: (state) => {
      state.id = null;
      state.name = "";
      state.email = "";
      state.address = "";
      state.phoneNumber = "";
    },
  },
});

export const { setUser, clearUser } = verifyUserSlice.actions;
export default verifyUserSlice.reducer;
