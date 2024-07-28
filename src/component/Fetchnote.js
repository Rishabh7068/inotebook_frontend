import { React, useContext, useEffect, useRef ,useState } from "react";
import { Noteitem } from "./Noteitem";
import noteContext from "../context/notes/noteContext";

export const Fetchnote = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const ref = useRef(null);
  
  const notess = {
    title : "",
    description : "",
    tag : ""
  }

  const [note, setNote] = useState(notess);

  const updateNote = (cN) => {
    ref.current.click();
    setNote(cN);
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);


const handelonclink = (e) =>{
    e.preventDefault();
    editNote(note._id,note.title ,note.description , note.tag);
}

const onchange =(e) =>{
    setNote({...note,[e.target.name] : e.target.value });
}


  return (
    <>
      <span
        ref={ref}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></span>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <div className="container my-3">
        <form>
          <div className="form-group mb-3">
            <label htmlFor='title'><h5>Title</h5></label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              placeholder="Enter title"
              name='title'
              value={note.title}
              onChange={onchange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor='description' ><h5>Description</h5></label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name='description'
              placeholder="Write Your Note"
              value={note.description}
              onChange={onchange}
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label htmlFor='tag'><h5>Tag</h5></label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name='tag'
              value={note.tag}
              placeholder="Tag"
              onChange={onchange}
            />
          </div>

          
        </form>
      </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handelonclink}>
            Add Note
          </button>
            </div>
          </div>
        </div>
      </div>

      <h1>Your Note</h1>
      <div className="row">
        {notes.map((note) => {
          return (
            <div className="col-md-4" key={note._id}>
              <Noteitem note={note} updateNote={updateNote} />
            </div>
          );
        })}
      </div>
    </>
  );
};
