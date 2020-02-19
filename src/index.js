import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import './assets/css/bootstrap.min.css';
// import './assets/css/font-awesome.min.css';
// import './assets/css/magnific-popup.css';
// import './assets/css/animate.min.css';
// import './assets/css/slick.css';
// import './assets/css/structure.css';
// import './assets/css/main.css';
// import './assets/css/responsive.css';
//
// import './assets/js/jquery.min.js';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/slick.js';
// import './assets/js/theia-sticky-sidebar.js';
// import './assets/js/magnific-popup.min.js';
// import './assets/js/carouFredSel.js';
// import './assets/js/main.js';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
