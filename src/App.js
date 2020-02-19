import React from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import AppRoute from "./router/Router";
import  preloader from './assets/images/preloader.gif'

function App() {
  return (
    <>
        <div id="preloader">
            <img src={preloader} alt="Image" className="tr-preloader img-fluid"/>
        </div>
      <BrowserRouter>
          <AppRoute/>
      </BrowserRouter>
    </>
  );
}

export default App;
