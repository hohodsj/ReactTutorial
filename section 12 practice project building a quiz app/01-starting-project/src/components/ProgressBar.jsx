import { useEffect, useState } from "react";

export default function ProgressBar({ timeout, questionIndex }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(() => {
        setRemainingTime(timeout);
        const timer = setInterval(() => setRemainingTime((prev) => prev - 1000), 1000);
        return () => clearInterval(timer);
    },[timeout, questionIndex]);

    return (
        <progress value={remainingTime} max={timeout} key={questionIndex}/>
    )
}