import { useState } from "react";

export function useInput(defaulValue, valudationFn) {
    const [enteredValue, setEnteredValue] = useState(defaulValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = valudationFn(enteredValue);

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        // To set didEdit back to false once user start typing (give user chance to redo input without seeing error), I think this is not needed.
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }
    
    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid,
    }
}