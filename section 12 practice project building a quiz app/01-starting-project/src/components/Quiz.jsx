import { useEffect, useState } from "react";
import QUESTIONS from "../question.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import ProgressBar from "./ProgressBar.jsx";

export default function Quiz() {
    const timeout = 15000;
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComlete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prev) => {
            // const copy = [...prev];
            return [...prev, selectedAnswer];
        });
    }
    

    if (quizIsComlete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon"/>
                <h2>Quiz Completed!</h2>
            </div>
        )
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            handleSelectAnswer("");
        },timeout);
        return () => clearTimeout(timer);
    }, [activeQuestionIndex])

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5); // shuffle

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => {
                        return (
                            <li key={answer} className="answer">
                                <button
                                    onClick={() => handleSelectAnswer(answer)}
                                >
                                    {answer}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <ProgressBar timeout={timeout} questionIndex={activeQuestionIndex}/>
        </div>
    );
}
