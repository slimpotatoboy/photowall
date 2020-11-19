import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/Main";
import "./assets/style.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from './redux/reducer';

const store = createStore(rootReducer);

// null = props
// const element = React.createElement(
//   "ol",
//   null,
//   tasks.map((task, index) => React.createElement("li", {key: index}, task))
// );

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);

// url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg');
