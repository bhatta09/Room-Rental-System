import { configureStore } from "@reduxjs/toolkit";
import verifyUserReducer from "./verifiedUser/verifyUserSlice";

const store = configureStore({ reducer: { user: verifyUserReducer } });

export default store;
