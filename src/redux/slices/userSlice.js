import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.token = action.payload.token;
    },
    setUserLogOutState: (state) => {
      state.token = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export const selectToken = (state) => state.user.token;
export default userSlice.reducer;
