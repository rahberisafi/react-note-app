import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import { NoteContext } from '../contexts/NoteContext';

class AddNote extends Component {
    static contextType = NoteContext;
    state = {
        id: uuid(),
        title: '',
        description: '',
        errors: {}
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = async e => {
        e.preventDefault();
        if (this.state.title === '') {
            this.setState({
                errors: {
                    ...this.state.errors,
                    title: 'please provide Title'
                }
            });
            return;
        }
        if (this.state.description === '') {
            this.setState({
                errors: {
                    ...this.state.errors,
                    title: '',
                    description: 'please provide Description'
             }
            });
            return;
        }
        try {
            const res = await axios.post(
                'https://jsonplaceholder.typicode.com/comments',
                {
                    name: this.state.title,
                    body: this.state.description
                }
              );
              
              const { data } = res;
      
              this.context.addNote(data);
              this.props.history.push('/');
        } catch (e) {
            console.log(e);
        }
       
        // this.setState({
        //     id: '',
        //     title: '',
        //     description: '',
        //     errors: {}
        // });
    };
    render() {
        return (
            <React.Fragment>
            <h3>Add Note</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                    type="text" 
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    className={classNames(
                        'form-control',
                        !!this.state.errors.title && 'is-invalid'
                    )}
                     />
                     <div className="invalid-feedback">Title must be Required</div>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Description</label>
                    <textarea
                    name="description" 
                    value={this.state.description}
                    onChange={this.handleChange}
                    className={classNames(
                        'form-control',
                        !!this.state.errors.description && 'is-invalid'
                    )}
                     />
              <div className="invalid-feedback">Description must be Required</div>

                </div>
                <button 
                className="btn btn-secondary">Submit</button>
            </form>
            </React.Fragment>
        )
    }
}

export default AddNote;