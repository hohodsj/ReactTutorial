import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); // setup redux dispatch
  const counter = useSelector(state => state.counter.counter); // setup redux subscription
  const show = useSelector(state => state.counter.showCounter); // subscribe to showCounter state
  
  const incrementHandler = () => {
    dispatch(counterActions.increment()); // action to increase the counter by 1
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // pass {type: SOME_UNIQUE_INDEXTIFIER, payload: 10} to action
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement()); // action to decrease the counter
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle()); // action to toggle the visibility of the counter
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
