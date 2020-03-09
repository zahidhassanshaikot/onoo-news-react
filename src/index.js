import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import "./assets/css/bootstrap.min.css"
// import "./assets/css/font-awesome.min.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/animate.min.css"
// import "./assets/css/slick.css"
import "./assets/css/structure.css"
import "./assets/css/main.css"
import "./assets/css/responsive.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store/store";
import {Provider} from 'react-redux'
import * as Types from './store/actions/types';
import jwtDecode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken";

const token = localStorage.getItem(('auth_token'));
if(token){
    let decode=jwtDecode(token);
    setAuthToken(token);
    store.dispatch({
        type:Types.SET_USER,
        payload:{
            user:decode
        }
    })
}



ReactDOM.render(
    <Provider store={store}><App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
