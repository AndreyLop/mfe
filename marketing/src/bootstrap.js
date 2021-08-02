import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

const devRoot = document.getElementById("_marketing-dev-root");

if (process.env.NODE_ENV === "development" && devRoot) {
  mount(devRoot);
}

export { mount };
