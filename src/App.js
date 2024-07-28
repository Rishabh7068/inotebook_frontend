import "./App.css";
import { React} from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import About from "./component/About";
import NoteState from './context/notes/NoteState';
import { Home } from "./component/Home";
import { Alert } from "./component/Alert";
import Alertstate from "./context/alert/Alertstate";


function App() {
  return (
    <>
  <Alertstate>
    <NoteState>
    <BrowserRouter>
      <Navbar/>
      <Alert/>
     
        <Routes>
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
