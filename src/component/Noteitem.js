import { React, useContext } from "react";
import noteContext from "../context/notes/noteContext";


export const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  
  
  return (
    <div className="my-3">
      <div className="card mx-1">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>

          <p className="card-text">{props.note.description}</p>
          <i
            className="fa-solid fa-trash mx-2"
            onClick={() => {
              deleteNote(props.note._id);
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            onClick={() => {
              props.updateNote(props.note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};
