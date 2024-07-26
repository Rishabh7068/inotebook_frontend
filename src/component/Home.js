import {React, useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Noteitem } from "./Noteitem";


export const Home = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {notes , setNotes} = context;
    console.log(notes);



  return (
    <div className="container my-3">
      <h2>Add Note</h2>
      <div className="container my-3">
        <form>
          <div className="form-group mb-3">
            <label ><h5>Title</h5></label>
            <input
              type="text"
              className="form-control"
              id="exampleInputtitle1"
              aria-describedby="emailHelp"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group mb-3">
            <label ><h5>Description</h5></label>
            <textarea
              className="form-control"
              id="exampleFormControlDescription"
              rows="3"
              placeholder="Write Your Note"
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label ><h5>Tag</h5></label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControltag"
              placeholder="Tag"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
      <h1>Your Note</h1>
      <div className="row">
                        {notes.map((note)=>{
                            return (
                            <div className="col-md-4" key={note._id}>
                                <Noteitem title={note.title ? note.title : ""} description={note.description ? note.description : ""} />
                            </div>
                            )
                        })}
        </div>
    </div>
  );
};
