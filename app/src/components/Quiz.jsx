import { useState } from "react";
import Header from "./Header";
import Question from "./Question";

const Quiz = () => {
  // storing the index of current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    {
      id: "q1",
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 3,
    },
    {
      id: "q2",
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Venus"],
      answer: 2,
    },
    {
      id: "q3",
      question: "What is the highest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: 3,
    },
    {
      id: "q4",
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      answer: 1,
    },
    {
      id: "q5",
      question: "What is the largest country in the world by land area?",
      options: ["Russia", "Canada", "China", "United States"],
      answer: 0,
    },
    {
      id: "q6",
      question: "What is the currency of Japan?",
      options: ["Yen", "Dollar", "Euro", "Pound"],
      answer: 0,
    },
    {
      id: "q7",
      question: "What is the largest ocean in the world?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      answer: 2,
    },
    {
      id: "q8",
      question: "What is the highest waterfall in the world?",
      options: [
        "Angel Falls",
        "Niagara Falls",
        "Victoria Falls",
        "Iguazu Falls",
      ],
      answer: 3,
    },
    {
      id: "q9",
      question: "What is the largest animal on Earth?",
      options: ["Blue whale", "African elephant", "Giraffe", "Hippopotamus"],
      answer: 0,
    },
    {
      id: "q10",
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
      answer: 1,
    },
  ]);
  // initially answers is an array of null values with length equal to that of the number of questions
  const [answers, setAnswers] = useState(questions.map((q) => null));

  return (
    <div className="quiz-container">
      <Header />
      <div className="quiz">
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            className="go_back"
          >
            <g id="Arrow / Caret_Circle_Left">
              <path
                id="Vector"
                d="M13 15L10 12L13 9M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <Question />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            className="go_next"
          >
            <g id="Arrow / Caret_Circle_Left">
              <path
                id="Vector"
                d="M13 15L10 12L13 9M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="submit">
          <button class="custom-btn btn-7">
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
