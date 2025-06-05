import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './ShoppingCart';


const store = configureStore({
    reducer: shoppingCartReducer
});

export default store;
