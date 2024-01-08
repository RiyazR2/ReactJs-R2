import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Hello World ");
console.log(heading);

const headingJSX = <h1>Hello World using JSX </h1>;
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingJSX);
