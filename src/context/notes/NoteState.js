import { useContext, useState } from "react";
import NoteContext from "./noteContext";
import alertContext from "../alert/alertContext";



const NoteState = (props) => {
  const host = process.env.REACT_APP_server;
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const context = useContext(alertContext);
  const {showAlert} = context;
  

  // Get All notes - Working Fine
    const getNotes = async() => {      
      
        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method:'GET',
                headers :{
                    'auth-token' : localStorage.getItem('token')
                },
            }); 
            const json = await response.json();
            setNotes(json);
        } catch (error) {
            console.log(error);
        }
      };
    
  // Add Note - Working fine
  const addNote = async(title, description, tag) => {   
    if(title.length < 3  || description.length < 5){
      showAlert("Title must be of 3 length and Description must be of 5 length","danger");
      return;
    }

    try {
        const response = await fetch(`${host}/api/notes/addnewnote`, {
            method:'POST',
            headers :{
                'content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body : JSON.stringify({title, description ,tag})
        }); 
        const json = await response.json();
        setNotes(notes.concat(json));
        showAlert("Note Added","success");
    } catch (error) {
        console.log(error);
    }    
  };

  // Delete a Note - Working Fine
  const deleteNote = async(id) => {
    try {
        await fetch(`${host}/api/notes/delete/${id}`, {
            method:'DELETE',
            headers :{
                'content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
        }); 
        const newNotes = notes.filter((note) => {
          return note._id !== id;
        });
        setNotes(newNotes);
        showAlert("Note Deleted","success");
    } catch (error) {
        console.log(error + "in DeleteNote");
    }
  };

  // Edit a Note - Working Fine
  const editNote = async(id, title, description, tag) => {
    if(title.length < 3  || description.length < 5){
      showAlert("Title must be of 3 length and Description must be of 5 length","danger");
      return;
    }
    try {
      //fetch API
      await fetch(`${host}/api/notes/updatenote/${id}`, {
      method:'PUT',
      headers :{
          'content-Type' : 'application/json',
          'auth-token' : localStorage.getItem('token')
      },
      body : JSON.stringify({title, description ,tag})
  }
);



  let newNotes = JSON.parse(JSON.stringify(notes));

  // EDIT LOGIC
  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if(element._id === id){
      element.title = title;
      element.description = description;
      element.tag = tag;
      break;
    }
  }

  setNotes(newNotes);
  showAlert("Note Edited","success");
    } catch (error) {
      console.log(error);
    }
  
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;