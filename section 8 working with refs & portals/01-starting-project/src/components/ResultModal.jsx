import {forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset}, ref) { /* with older version of react, you need to use forwardRef to pass the ref to the component */

    const dialog = useRef(); // Create another ref for the dialog

    const userLost = remainingTime <= 0; // check if the user lost
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    // useImprativeHandle always takes ref as first argument, and a function as the second argument
    // This ref refers to the ref being passed in from the parent component
    useImperativeHandle(ref, () => { 
        return {
            open() { // create a open() method for the ref being passed in 
                dialog.current.showModal(); // show the modal with ref we created this level
            }
        };
    })

    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}> {/* use the ref we created to open the modal */}
            { userLost && <h2>Your Lost </h2> }
            { !userLost && <h2>Your Score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>  {/* html built in feature form with method dialog with button will auto close dialog */}
                <button>Close</button>
            </form>
        </dialog>, 
        document.getElementById('modal')
    );
})

export default ResultModal;