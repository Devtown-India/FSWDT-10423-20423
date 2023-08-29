import LayerThree from "./LayerThree";

const LayerTwo = ({ todos }) => {
  return (
    <div>
      <h2>Layer Two</h2>
      <LayerThree todos={todos} />
    </div>
  );
};

export default LayerTwo;
