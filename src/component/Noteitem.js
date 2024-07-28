import { React, useContext } from "react";
import noteContext from "../context/notes/noteContext";

export const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;  
  const tag = props.note.tag;

  let myArray = tag.split(",");
  if(tag === ""){
    myArray = [];
  }

  const collapseId = `${props.note._id}`;
  

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
          <p className="d-inline-flex gap-1">
            <a
              className="btn btn-primary"
              data-bs-toggle="collapse"
              href={`#${collapseId}`}
              role="button"
              aria-expanded="false"
              aria-controls={collapseId}
            >
              Tags
            </a>
          </p>
          <div className="collapse" id={collapseId}>
          
            <div className="card card-body">
            <h3>{myArray.length === 0 && "No Tag"}</h3> 
              {myArray.map((tags, idx) => {
                return (
                  <div key={idx}>
                    <p>{tags}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
