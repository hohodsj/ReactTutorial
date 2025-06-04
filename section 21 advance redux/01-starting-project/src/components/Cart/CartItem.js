import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { shoppingCartActions } from '../../store/ShoppingCart';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const updateItemHandler = (title, quantity) => {
    dispatch(shoppingCartActions.updateItem({
      title,
      quantity
    }));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => updateItemHandler(title, -1)}>-</button>
          <button onClick={() => updateItemHandler(title, 1)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
