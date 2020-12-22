import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "./component/assets/css/material-dashboard-react.css"

import { createStore, applyMiddleware , compose } from "redux";
import thunk from "redux-thunk"; 
import { Provider } from "react-redux";
import rootReducer from './redux/reducer'


import firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDpg_AqQ1tZJ_yWbf6LMLpPECh8lf5XgpA",
//   authDomain: "web-messenger-e3b43.firebaseapp.com",
//   databaseURL: "https://web-messenger-e3b43.firebaseio.com",
//   projectId: "web-messenger-e3b43",
//   storageBucket: "web-messenger-e3b43.appspot.com",
//   messagingSenderId: "169637137858",
//   appId: "1:169637137858:web:8d286ab9ba6683d1701a5b",
//   measurementId: "G-7PMHRR35EG"
// };

// firebase.initializeApp(firebaseConfig);

// fire store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
