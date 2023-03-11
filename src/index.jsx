import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./component/app";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>);

// ReactDOM.render(<App />, document.querySelector("#root"));
/**
 * https://habr.com/ru/company/ruvds/blog/436886/
 */