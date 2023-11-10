import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  username: "guest",
  email: "google@gmail.com",
  achievements: [],
  authenticate: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.achievements = action.payload.achievements;
      state.authenticate = action.payload.authenticate;
    },
    removeUser: (state, action) => {
      state = initialState;
    },
  },
});
