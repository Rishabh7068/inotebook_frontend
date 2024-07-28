import React, { useState , useContext } from 'react'
import noteContext from "../context/notes/noteContext";

export const Addnote = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {addNote } = context;
    const notess = {
        title : "",
        description : "",
        tag : ""
    }

    const [note, setNote] = useState(notess);

    const handelonclink = (e) =>{
        e.preventDefault();
        addNote(note.title ,note.description , note.tag);
        setNote(notess);
    }

    const onchange =(e) =>{
        setNote({...note,[e.target.name] : e.target.value });
    }

  return (
    <div>
         <h2>Add Note</h2>
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
              placeholder="Tag"
              value={note.tag}
              onChange={onchange}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handelonclink}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  )
}
