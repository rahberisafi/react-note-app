import React, { useContext } from 'react';
import Note from './Note';
import { NoteContext } from '../contexts/NoteContext';

const Notes = () =>  {
    const context = useContext(NoteContext);
    const { notes } = context;
        return (
            <div>
            <h3>Notes...</h3>
            {notes.map(note => (
              <Note key={note.id} note={note} />
            ))}
            </div>
        );
};

export default Notes;