import "./App.css";
import { React} from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import About from "./component/About";
import NoteState from './context/notes/NoteState';
import { Home } from "./component/Home";
import { Alert } from "./component/Alert";
import Alertstate from "./context/alert/Alertstate";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Welcome from "./component/Welcome";




function App() {
  return (
    <>
  <Alertstate>
    <NoteState>
    <BrowserRouter>
      <Navbar/>
      <Alert/>
        <Routes>
              <Route exact path="/"  element={<><Welcome/></>}/>
              <Route exact path="/login"  element={<><Login/></>}/>
              <Route exact path="/signup"  element={<><Signup/></>}/>

             <Route exact path="/home"  element={<><Home/></>}/>
             <Route exact path="/about" element={<><About/></>}/>
        </Routes>
    </BrowserRouter>
    </NoteState>
    </Alertstate>
    </>
  );
}

export default App;
