import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./features/numberSlice";
import usersReducer from "./features/userSlice";
import { apiSlice } from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    number: numberReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
