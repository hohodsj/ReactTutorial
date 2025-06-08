import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Fetching...",
                message: "Fetching cart data!",
            })
        );
        const fetchData = async () => {
            const response = await fetch(
                "https://react-http-1234-default-rtdb.firebaseio.com/cart.json"
            );
            if (!response.ok) {
                console.log("Error fetching cart data");
                throw new Error("Could not fetch cart data.");
            }
            return response.json();
        };
        try {
            const data = await fetchData();
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Fetched cart data successfully!",
                })
            );
            dispatch(cartActions.replaceCart(data));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching cart data failed!",
                })
            );
        }
    };
};
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data!",
            })
        );
        const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-1234-default-rtdb.firebaseio.com/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );
            if (!response.ok) {
                throw new Error("Sending cart data failed.");
            }
        };
        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        }
    };
};
