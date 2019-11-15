import React from 'react';
import { render } from "react-dom";

import App from './js/components/App';
import { Provider } from "react-redux";
import store from "./js/store/index";
import './styles/index.css';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);