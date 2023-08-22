const Question = ({ data, selectedAnswer, handleAnswer }) => {
  return (
    <div className="question">
      <h1>{data.question}</h1>
      <div className="options">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {data.options.map((option, index) => {
            if (selectedAnswer === index) {
              return (
                <button
                  style={{ border: "3px solid #ffbf00" }}
                  onClick={() => handleAnswer(index, data.id)}
                >
                  {option}
                </button>
              );
            }
            return (
              <button onClick={() => handleAnswer(index, data.id)}>
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Question;
