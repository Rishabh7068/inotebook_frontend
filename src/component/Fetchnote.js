import {React,useContext} from 'react'
import { Noteitem } from "./Noteitem";
import noteContext from "../context/notes/noteContext";

export const Fetchnote = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {notes} = context;
  return (
    <div>
        <h1>Your Note</h1>
      <div className="row">
                        {notes.map((note)=>{
                            return (
                            <div className="col-md-4" key={note.title}>
                                <Noteitem note={note}/>
                            </div>
                            )
                        })}
        </div>
    </div>
  )
}
