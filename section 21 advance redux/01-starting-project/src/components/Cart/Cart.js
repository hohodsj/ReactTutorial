import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  // Adjust the selector to match your Redux state structure
  const cartItems = useSelector((state) => state);
  console.log(`cartItems: ${JSON.stringify(cartItems)}`);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems&&cartItems.map((item) => (
        <CartItem
          key={item.title}
          item={{ title: item.title, quantity: item.quantity, total: item.quantity * item.price, price: item.price }}
        />))}
      </ul>
    </Card>
  );
};

export default Cart;
