import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter,
            };
        case "increase":
            return {
                counter: state.counter + action.value,
                showCounter: state.showCounter,
            };
        case "decrement":
            return {
                counter: state.counter - 1,
                showCounter: state.showCounter,
            };
        case "toggle":
            return {
                ...state, // spread operator to keep the current state
                showCounter: !state.showCounter,
            }; // toggle the showCounter boolean
        default:
            return state;
    }
};

const store = createStore(counterReducer);

export default store;
