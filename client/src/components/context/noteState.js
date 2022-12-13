import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const initialUsers = []  // updated using fetch api initially

    const [users, setUsers] = useState(initialUsers);

    // Get all notes 
    const getUsers = async () => {
        const response = await fetch(`${host}/api/notes/fetchNotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();  // it parses the json , that's why it is await 
        setUsers(json);
    }

    // add note 
    const addUsers = async (customerName, phoneNumber, isMember,age,currSlotId) => {
        //fetch api  
        const response = await fetch(`${host}/api/notes/addNote/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',y
            },
            body: JSON.stringify({ customerName, phoneNumber, isMember,age,currSlotId })
        });
        let note = await response.json();
        setUsers(users.concat(note));
    }

    return (
        < NoteContext.Provider value={{ users, setUsers, addUsers, getUsers }} >
            {props.children} ;
        </ NoteContext.Provider >
    )
}

export default NoteState; 