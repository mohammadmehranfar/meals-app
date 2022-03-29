import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import './index.css';
import { AppContext } from "./Components/Context/Context";
const whereToShow = document.getElementById('root');
ReactDOM.render(<AppContext><App/></AppContext>,whereToShow);