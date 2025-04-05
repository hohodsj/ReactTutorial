export default function ResultModal({result, targetTime}) {
    return (
        <dialog className="result-modal" open> {/* by default dialog is invisible, to show dialog add open */}
            <h2>Your {result} </h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">  {/* html built in feature form with method dialog with button will auto close dialog */}
                <button>Close</button>
            </form>
        </dialog>
    )
}