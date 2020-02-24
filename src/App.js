import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/Router";
import  preloader from './assets/images/preloader.gif'

function App() {
  return (
    <>
        <div id="preloader">
            <img src={preloader} alt="Image" className="tr-preloader img-fluid"/>
        </div>
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
    </>
  );
}

export default App;
