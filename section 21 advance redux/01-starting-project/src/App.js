import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        if(isInitial) {
            isInitial = false;
            return;
        }
        dispatch(sendCartData(cart));
    }, [cart, dispatch]);
    return (
        <>
            {notification && (
                <Notification
                    status={notification?.status}
                    title={notification?.title}
                    message={notification?.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
