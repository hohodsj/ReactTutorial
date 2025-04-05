export default function ResultModal({ref, result, targetTime}) { /*passing ref works for react version 19 or higher, otherwise use forwardRef */
    return (
        <dialog ref={ref} className="result-modal">
            <h2>Your {result} </h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">  {/* html built in feature form with method dialog with button will auto close dialog */}
                <button>Close</button>
            </form>
        </dialog>
    )
}