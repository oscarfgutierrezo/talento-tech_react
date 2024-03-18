import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    name: "Oscar",
    lastname: "Gutierrez",
    email: "oscar@correo.com",
    id: 123456,
    img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
