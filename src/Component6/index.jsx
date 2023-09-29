import React from "react";
import { useState } from "react";

const QuizCard = () => {
  const [questions] = useState([
    { question: "What is 2 + 1?", options: ["2", "3", "4", "5"], correct: "3" },
    { question: "What is 3 + 2?", options: ["4", "5", "6", "7"], correct: "5" },
    { question: "What is 5 + 1?", options: ["5", "6", "7", "8"], correct: "6" },
    { question: "What is 4 + 2?", options: ["6", "7", "8", "9"], correct: "6" },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnwsers] = useState([]);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1)
  }
const  recordAnswer = (answer) => {
    let newAnswers = [... userAnswers]
    newAnswers[currentQuestionIndex] = answer
    setUserAnwsers(newAnswers)
}
const {question, options} = questions[currentQuestionIndex]

  return   <div>
    <div>{question}</div>
    { options.map((option, index) => (<button key={index} onClick={() => recordAnswer(option)}>{option}</button>)) }
    <div>
        <button onClick={prevQuestion} disabled= {currentQuestionIndex === 0}>
            Previous
        </button>
        <button onClick={nextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
            Next
        </button>
    </div>
  </div>;
};

export default QuizCard;
