//引入react核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom";
//引入
import { HashRouter } from "react-router-dom"
//引入App
import App from './App.js'

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root')
)