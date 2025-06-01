import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); // setup redux dispatch
  const counter = useSelector(state => state.counter); // setup redux subscription
  const show = useSelector(state => state.showCounter); // subscribe to showCounter state
  
  const incrementHandler = () => {
    dispatch({ type: 'increment'}); // actoun to increase the counter must match with string in /src/store/index.js
  }
  const increaseHandler = () => {
    dispatch({ type: 'increase', value: 5 }); // action to increase the counter by a specific value
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement'}); 
  }
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'}); // action to toggle the visibility of the counter
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button> {/* This button will dispatch an action to increment the counter  */}
        <button onClick={increaseHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
