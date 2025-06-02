import { createSlice } from "@reduxjs/toolkit";

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

export const authActions = authSlice.actions; // export the actions to be used in components
export default authSlice.reducer;