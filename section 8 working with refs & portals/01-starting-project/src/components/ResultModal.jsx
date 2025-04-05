import {forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) { /* with older version of react, you need to use forwardRef to pass the ref to the component */

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal(); // show the modal
            }
        };
    })

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>Your {result} </h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">  {/* html built in feature form with method dialog with button will auto close dialog */}
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;