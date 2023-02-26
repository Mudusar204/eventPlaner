import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./eventSlice";
import addEventSlice from "./addEventSlice";
const store=configureStore({
    reducer:{
       eventSlice,
       addEventSlice,
    },
});
export default store