import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Hello World ");
console.log(heading);

// JSX React Element
const headingJSX = <h1>Hello World using JSX </h1>;
console.log(headingJSX);

// Functional Component
const Author = () => <h1>Author: Riyaz</h1>;

// React Functional Component
const HeadingComponent = () => (
  <>
    {heading}
    {headingJSX}
    {Author()}
    <Author />
    <h1 className="heading">Nemaste React From Functional Component</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
