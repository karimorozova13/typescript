// import "./all-types/primitives";
// import "./all-types/arrays";
// import "./all-types/types";
// import "./all-types/interfaces";
// import "./all-types/enums";
// import "./all-types/functions";
// import "./all-types/pizza";
// import "./all-types/classes";
// import "./generics/generic-fns";
// import "./generics/extends";
// import "./generics/interfaces";
// import "./generics/examples";
// import "./generics/classes";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export {};
