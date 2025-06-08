import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false, // Track if the cart has changed
    },
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items || [];
            state.totalQuantity = action.payload.totalQuantity || 0;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.itemId === newItem.id
            );
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalQuantity++;
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.itemId === id);
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.itemId !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            state.totalQuantity--;
        },
    },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
