import { configureStore } from '@reduxjs/toolkit';
import postReducer from "../features/posts/PostSlice"
import userReducer from "../features/users/UserSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer
  },
})

export default store;