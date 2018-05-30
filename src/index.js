import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import {BrowserRouter} from "react-router-dom";
import 'toastr/build/toastr.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyA4-qTOdtpvj1z3ez3ekhxopatEUF_DG3I",
    authDomain: "safe-sense.firebaseapp.com",
    databaseURL: "https://safe-sense.firebaseio.com",
    projectId: "safe-sense",
    storageBucket: "safe-sense.appspot.com",
    messagingSenderId: "351490248374"
});
const WithRouter = ()=>{
    return(
        <BrowserRouter><App/></BrowserRouter>
    );
};
ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
