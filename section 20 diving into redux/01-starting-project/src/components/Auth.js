import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import {useSelector} from 'react-redux'; // import useSelector to subscribe to the state
import {useRef} from 'react'; // import useRef to manage form input references

const Auth = () => {
  const dispatch = useDispatch(); // setup redux dispatch
  const emailInputRef = useRef(); // create a ref for the email input
  const passwordInputRef = useRef(); // create a ref for the password input
  const loginHandler = () => {
    const enteredEmail = emailInputRef.current.value; // get the value of the email input
    const enteredPassword = passwordInputRef.current.value; // get the value of the password input
    if(enteredEmail.trim() === '' || enteredPassword.trim() === '') {
      return; // if either input is empty, do nothing
    }
    dispatch(authActions.login()); // action to set isAuthenticated to true
  }
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // subscribe to isAuthenticated state
  return (
    !isAuthenticated && (
      <main className={classes.auth}>
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' ref={passwordInputRef}/>
            </div>
            <button onClick={loginHandler}>Login</button>
          </form>
        </section>
      </main>
    )
  );
};

export default Auth;
