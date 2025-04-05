import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer; // this will not work, because the timer GLOBAL variable will be share amoung other instances of the component
export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef(); // this will work, because the timer variable is scoped to the component instance, and wont be affected by state changes
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    // let timer; // this will not work, because it will be reset every time when the timerStarted state changes

    function handleStart() {
        timer.current = setTimeout(() => {
            // make sure always target .current to ref objects
            setTimerExpired(true);
            dialog.current.open(); // standard show feature from dialog, not react
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current); // built-in function to clear the timeout with timer pointer
        setTimerStarted(false);
        setTimerExpired(false);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result={"lost"}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}
