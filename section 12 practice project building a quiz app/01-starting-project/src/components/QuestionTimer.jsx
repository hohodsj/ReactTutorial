import { useState, useEffect } from "react";
export default function QuestionTimer({timeout, onTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout, timeout);
        return () => clearTimeout(timer);
    },[timeout, onTimeout])

    useEffect(() => {
        console.log('SETTING INTERVAL');
        const timer = setInterval(() => {
            setRemainingTime((prev) => prev - 100)
        }, 100)
        return () => clearInterval(timer);
    }, []);

    return (
        <progress id="question-time" max={timeout} value={remainingTime}/>
    )
}