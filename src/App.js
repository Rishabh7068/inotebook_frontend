import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./component/About";
import NoteState from './context/notes/NoteState';
import { Home } from "./component/Home";
import { Alert } from "./component/Alert";

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
      <Navbar/>
      <Alert message="hardwork is the key to success"/>
      <LoadingBar
      shadow ={true}
      height={3}
      color='#f11946'
      progress={0}
    />

        <Routes>
             <Route exact path="/home"  element={<><Home/></>}/>
             <Route exact path="/about" element={<><About/></>}/>
        </Routes>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
