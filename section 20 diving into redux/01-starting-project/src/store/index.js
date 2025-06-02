import { createSlice, configureStore } from "@reduxjs/toolkit";

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
})
const initialAuthState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            console.log('login, curr state:', JSON.stringify(state)); // log the state before mutation
            state.isAuthenticated = true; // set isAuthenticated to true
        },
        logout(state) {
            console.log('logout, curr state:', JSON.stringify(state)); // log the state before mutation
            state.isAuthenticated = false; // set isAuthenticated to false
        }
    }
});


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer // add the auth slice to the store
    }
});

export const counterActions = counterSlice.actions; // export the actions to be used in components
export const authActions = authSlice.actions; // export the auth actions to be used in components
export default store;
