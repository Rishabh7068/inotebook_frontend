import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";

import { BrowserRouter, Route, Routes  } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./component/About";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <LoadingBar
      shadow ={true}
      height={3}
      color='#f11946'
      progress={0}
    />
        <Routes>
             <Route exact path="/"  element={<></>}/>
             <Route exact path="/about" element={<><About/></>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
