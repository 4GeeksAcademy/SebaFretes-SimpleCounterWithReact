//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let count = 0;

const renderPage = () => {
    count = count+1;
    ReactDOM.render(<SecondsCounter seconds = {count}/>, document.querySelector("#app"));
}

setInterval(renderPage, 1000);