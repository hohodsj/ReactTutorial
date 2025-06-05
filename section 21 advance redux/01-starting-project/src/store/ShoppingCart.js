import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const product = state.find(item => item.title === action.payload.title);
            if (product) {
                product.quantity++;
            }
            else {
                state.push(action.payload);
            }
            console.log('State after adding item:', JSON.stringify(state));
        },
        updateItem: (state, action) => {
            console.log('state before update:', JSON.stringify(state));
            const product = state.find(item => item.title === action.payload.title);
            if (product) {
                product.quantity += action.payload.quantity;
            }
            console.log('State after update1 item:', JSON.stringify(state));
            if (product && product.quantity <= 0) {
                const index = state.findIndex(item => item.title === product.title);
                if (index !== -1) {
                    state.splice(index, 1);
                }
            }
            console.log('State after update2 item:', JSON.stringify(state));
        },
    }
})

export const shoppingCartActions = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;