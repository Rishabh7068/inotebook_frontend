import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
    const notesInitial  = [
        {
            "_id": "66a387f8bfdbf7a2f605e87b",
            "user": "66a21c040b8a980f1c0be150",
            "title": "I am Iron",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
            "tag": "marvel",
            "date": "2024-07-26T11:26:48.228Z",
            "__v": 0
        },
        {
            "_id": "66a38816bfdbf7a2f605e87d",
            "user": "66a21c040b8a980f1c0be150",
            "title": "love is blind",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
            "tag": "Love",
            "date": "2024-07-26T11:27:18.910Z",
            "__v": 0
        },
        {
            "_id": "66a38832bfdbf7a2f605e87f",
            "user": "66a21c040b8a980f1c0be150",
            "title": "hate is worst",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
            "tag": "hate",
            "date": "2024-07-26T11:27:46.372Z",
            "__v": 0
        }
    ]
    // eslint-disable-next-line
    const [notes, setNotes] = useState(notesInitial)

    // Add Note 

    const addNote = (title , description , tag )=>{
        console.log("Add New note");
        const note = {
            "_id": "66a38832bfdbf7a2f605e87f",
            "user": "66a21c040b8a980f1c0be150",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-07-26T11:27:46.372Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }


    // Delete a Note
    
    const deleteNote = (id)=>{
        console.log("deleting with note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id !== id})
        setNotes(newNotes);
    }

    // Edit a Note

    const editNote = (id ,title , description , tag  )=>{
        
    }

    return (
        <NoteContext.Provider value={{notes ,addNote , deleteNote , editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

