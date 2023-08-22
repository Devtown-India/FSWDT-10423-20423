import { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import PrevIcon from "../layout/PrevIcon";
import NextIcon from "../layout/NextIcon";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const handleAnswer = (selectedAnswer, questionId) => {
    const questionIndex = questions.findIndex((q) => q.id === questionId);
    setAnswers((prev) =>
      prev.map((answer, index) => {
        if (index === questionIndex) {
          return selectedAnswer;
        }
        return answer;
      })
    );
  };

  const goNext = () =>
    setCurrentQuestion((prev) => {
      if (prev < questions.length - 1) {
        return prev + 1;
      }
      return prev;
    });

  const goBack = () =>
    setCurrentQuestion((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });

  const submiTest = () => {
    // check if all questions are marked, if not display warning
    navigate("/result", {
      state: {
        answers: answers,
        questions: questions,
      },
    });
  };

  const attempted = answers.filter((a) => a !== null).length;
  return (
    <div className="quiz-container">
      <Header answers={answers} />
      <div className="quiz">
        <div style={{ display: "flex", alignItems: "center" }}>
          {currentQuestion > 0 && <PrevIcon goBack={goBack} />}
          <Question
            handleAnswer={handleAnswer}
            // selected answer is the index of the selected option
            selectedAnswer={answers[currentQuestion]}
            data={questions[currentQuestion]}
          />
          {currentQuestion < questions.length - 1 && (
            <NextIcon goNext={goNext} />
          )}
        </div>
        <div className="submit">
          <button onClick={submiTest} class="custom-btn btn-7">
            <span>
              {attempted === questions.length ? "Submit" : "End test"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
