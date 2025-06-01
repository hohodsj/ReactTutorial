import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducer: {
        increment(state){
            state.counter++; // directly mutate the state, Redux Toolkit uses Immer under the hood, and change the behavior to copy state and update counter.
        },
        decrement(state){
            state.counter--; 
        },
        increase(state, action){
            state.counter += action.value; // action.value is the payload passed when dispatching the action
        },
        toggle(state){
            state.showCounter = !state.showCounter; // toggle the showCounter boolean
        },
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;
