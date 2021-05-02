import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import reducer from '../src/reducer/index.js'
import { createStore,compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

let middlewares = applyMiddleware(thunk);

const store = createStore(
    reducer,
    middlewares
)
// BACKEND ENDPOINT BASE URL
console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(
    <Provider store ={store}>
       <App />
    </Provider>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
