const Question = () => {
  return (
    <div className="question">
      <h1>What is the largest desert in the world?</h1>
      <div className="options">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button>options 1</button>
          <button>options 1</button>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button>options 1</button>
          <button>options 1</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
