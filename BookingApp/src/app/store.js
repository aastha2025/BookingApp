import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice";
// import { useReducer } from "react";
const store =  configureStore({
    reducer: {
        user: userReducer,
    }
});

export default store;