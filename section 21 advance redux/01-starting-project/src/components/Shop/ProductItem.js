import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { shoppingCartActions } from '../../store/ShoppingCart';
import {useRef} from 'react';

const ProductItem = (props) => {
  const {title, price, description} = props;
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    console.log('clicked');
    dispatch(shoppingCartActions.addItem({
      title: titleRef.current.value,
      price: +priceRef.current.value,
      description: descriptionRef.current.value,
      quantity: 1
    }));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header className={classes.header}>
          <label className={classes.label}>Title:</label>
          <input type="text" ref={titleRef} className={classes.input} defaultValue={title}/>
          <label className={classes.label}>Price:$</label>
          <input type="number" ref={priceRef} className={classes.price} defaultValue={price.toFixed(2)}/>
        </header>
        <textarea ref={descriptionRef} className={classes.textarea}>{description}</textarea>
        <div className={classes.actions}>
          <button className={classes.button} onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
