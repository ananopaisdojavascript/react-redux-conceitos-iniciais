import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: "Jennie" },
  { id: '1', name: "TaeYeon" },
  { id: '2', name: "Lisa" },
]

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;