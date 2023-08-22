const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(
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
    }
  );
  const [answers, setAnswers] = useState(questions.map((q) => null));

  return <div className="quiz-container"></div>;
};

export default Quiz;
