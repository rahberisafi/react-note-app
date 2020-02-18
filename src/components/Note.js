import React, { useContext } from 'react';
import { NoteContext } from '../contexts/NoteContext';
import axios from 'axios';

const Note = (props) => {
  const context = useContext(NoteContext);
  const { removeNote } = context;
  const handleRemoveNote = async id => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
      removeNote(id);
    } catch (e) {
      console.log(e);
    }
  };

    const { id, name: title, body: description } = props.note;
    return (
      <div className="card">
      <div className="card-body">
         <h3 className="card-title">{title}</h3>
         <p className="card-text">{description}</p>
         <button className="btn btn-secondary" onClick={() => handleRemoveNote(id)}>Remove</button>
      </div>
     </div>
    )
};

export default Note;