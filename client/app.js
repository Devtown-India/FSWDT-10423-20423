const ele = React.createElement(
  "ul",
  {},
  React.createElement("li", {}, "Hello World again"),
    React.createElement("li", {}, "Hello World 22"),
);
const domeEle = document.createElement("div");

const root = document.getElementById("root");
ReactDOM.render(ele, root);

// console.log(ele)
// console.dir(domeEle)
