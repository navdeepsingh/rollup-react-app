import update from "./update.js";
import * as React from "react";
import * as ReactDOM from "react-dom";

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log(
  "if you have sourcemaps enabled in your devtools, click on main.js:5 -->"
);

update();

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const HelloWorld = () => {
  return <h1>Hello World</h1>;
};

root.render(<HelloWorld />);
