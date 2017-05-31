import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCDZi-fb6kX-4e6S-EwNloOuV7D_v5PoP8",
    authDomain: "contract-starter.firebaseapp.com",
    databaseURL: "https://contract-starter.firebaseio.com",
    projectId: "contract-starter",
    storageBucket: "contract-starter.appspot.com",
    messagingSenderId: "99212900703"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();