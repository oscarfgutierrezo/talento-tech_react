import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./components/features/numberSlice";
import usersReducer from "./components/features/userSlice";

const store = configureStore({
  reducer: {
    number: numberReducer,
    users: usersReducer,
  },
});

export default store;
