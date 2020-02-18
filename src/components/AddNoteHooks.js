import React, { useState, useContext } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import { NoteContext } from '../contexts/NoteContext';

const AddNote = (props) => {
 const context = useContext(NoteContext);
 const [note, setNote] = useState({
     id: uuid(),
     title: '',
     description: ''
 });
 const [errors, setErrors] = useState({});
 const handleChange = e => {
    setNote({
        ...note,
        [e.target.name]: e.target.value
    });
};
 const handleSubmit = async e => {
    e.preventDefault();
    if (note.title === '') {
        setErrors({
            errors: {
                ...errors,
                title: 'please provide Title'
            }
        });
        return;
    }
    if (note.description === '') {
        setErrors({
                ...errors,
                title: '',
                description: 'please provide Description'
        });
        return;
    }
    try {
        const res = await axios.post(
            'https://jsonplaceholder.typicode.com/comments',
            {
                name: note.title,
                body: note.description
            }
          );
          
          const { data } = res;
  
          context.addNote(data);
          props.history.push('/');
    } catch (e) {
        console.log(e);
    }
};  
    return (
        <React.Fragment>
        <h3>Add Note</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                name="title"
                value={note.title}
                onChange={handleChange}
                className={classNames(
                    'form-control',
                    !!errors.title && 'is-invalid'
                )}
                 />
                 <div className="invalid-feedback">Title must be Required</div>
            </div>
            <div className="form-group">
                <label htmlFor="title">Description</label>
                <textarea
                name="description" 
                value={note.description}
                onChange={handleChange}
                className={classNames(
                    'form-control',
                    !!errors.description && 'is-invalid'
                )}
                 />
          <div className="invalid-feedback">Description must be Required</div>

            </div>
            <button 
            className="btn btn-secondary">Submit</button>
        </form>
        </React.Fragment>
    ); 
};

export default AddNote;