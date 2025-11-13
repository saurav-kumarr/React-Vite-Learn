import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers/postReducer";

const initialState = {
    posts: {
        posts: [],
        loadding: false,
        error: null,
    }
}

 const store = configureStore({

    reducer: {
        posts: postReducer,
    },
    preloadedState: initialState,

});

export default store;