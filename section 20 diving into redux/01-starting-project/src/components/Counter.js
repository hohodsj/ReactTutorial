import {Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch(); // setup redux dispatch
//   const counter = useSelector(state => state.counter); // setup redux subscription
  
//   const incrementHandler = () => {
//     dispatch({ type: 'increment'}); // actoun to increase the counter must match with string in /src/store/index.js
//   }
//   const decrementHandler = () => {
//     dispatch({ type: 'decrement'}); 
//   }
//   const toggleCounterHandler = () => {};
// };

class Counter extends Component {
  incrementHandler() {
    this.props.increment(); // received from mapDispatchToProps
  }
  decrementHandler() {
    this.props.decrement(); // received from mapDispatchToProps
  }
  toggleCounterHandler() {}

  render() {
    return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div> {/* This value is received from mapStateToProps, which maps the state to props */}
      <div>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button> {/* This button will dispatch an action to increment the counter  */}
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
    </main>
  );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
