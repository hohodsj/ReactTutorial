import { useState } from "react";
export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === "") {
            return; // do not add empty tasks
        }
        onAdd(enteredTask);
        setEnteredTask(""); // clear the input field
    }

    useState();
    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={(event) => handleChange(event)}
                value={enteredTask}
            />
            <button
                className="text-stone-700 hover:text-stone-700"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}
