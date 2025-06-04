import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartItems = useSelector((state) => state);
  const itemsCount = cartItems?.length ?? 0;
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default CartButton;
