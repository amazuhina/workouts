import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import firebase from "firebase";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts"

import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBXtLegQNM-b1G5JXUSty_xau2Qa7V3ke8",
    authDomain: "workouts-project.firebaseapp.com",
    databaseURL: "https://workouts-project-default-rtdb.firebaseio.com",
    projectId: "workouts-project",
    storageBucket: "workouts-project.appspot.com",
    messagingSenderId: "9632245322",
    appId: "1:9632245322:web:d29eaef6026eeeee6068b3"
};

firebase.initializeApp(firebaseConfig);


Array.prototype.shuffle = function () {
    return this.sort(() => Math.random() - 0.5);
}


export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()
export const database = firebase.database



const app  = (
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <Provider store={store}>
            <App />
        </Provider>
    </Context.Provider>

)

ReactDOM.render(app, document.getElementById('root'))
