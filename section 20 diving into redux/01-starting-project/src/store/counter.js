import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state){
            state.counter++; // directly mutate the state, Redux Toolkit uses Immer under the hood, and change the behavior to copy state and update counter.
        },
        decrement(state){
            state.counter--; 
        },
        increase(state, action){
            state.counter += action.payload; // payload is a property defined by the Redux Toolkit, it will received something like {type: SOME_UNIQUE_INDEXTIFIER, payload: 10}
        },
        toggle(state){
            state.showCounter = !state.showCounter; // toggle the showCounter boolean
        },
    }
});

export const counterActions = counterSlice.actions; // export the actions to be used in components

export default counterSlice.reducer;