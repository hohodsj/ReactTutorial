import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"; // import the counter slice
import authReducer from "./auth"; // import the auth slice


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer // add the auth slice to the store
    }
});

export default store;
