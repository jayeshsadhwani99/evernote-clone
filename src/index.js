import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyCsQVFY3Ou5SFOAtzSV5E8AjjhbfNaJ-oM",
    authDomain: "evernote-clone-1d810.firebaseapp.com",
    projectId: "evernote-clone-1d810",
    storageBucket: "evernote-clone-1d810.appspot.com",
    messagingSenderId: "1073472148057",
    appId: "1:1073472148057:web:1965058d76985408185748",
    measurementId: "G-T8PPNGFWXJ"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
