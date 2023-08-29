import LayerTwo from "./LayerTwo";

const LayerOne = ({ todos }) => {
  return (
    <div>
      <h1>Layer One</h1>
      <LayerTwo todos={todos} />
    </div>
  );
};

export default LayerOne;
