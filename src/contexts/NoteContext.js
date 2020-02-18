import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const NoteContext = createContext();

export const NoteProvider = (props) => {
  const [notes, setNotes] = useState([
      {
        id: 1,
        title: 'Note 1',
        description: 'Note 1 Description'
      },
      {
        id: 2,
        title: 'Note 2',
        description: 'Note 2 Description'
      },
      {
        id: 3,
        title: 'Note 3',
        description: 'Note 3 Description'
      }
    ]
  )
  

      useEffect(() => {
        const runAsyncCode = async() => {
          try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
            const { data } = res;
            setNotes(data);  
        } catch (e) {
            console.log(e);
          }
        }
        runAsyncCode();
    }, [])
  
      
      const addNote = note => {
        setNotes([...notes, note]);
      };
    
      const removeNote = id => {
        setNotes([...notes.filter(note => note.id !== id)]);
      };
       
        return(
            <NoteContext.Provider value={{
                notes: notes,
                addNote: addNote, 
                removeNote: removeNote
                }}>
              {props.children}
            </NoteContext.Provider>
        );
}