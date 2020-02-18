import React from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import About from './components/About';
import Notes from './components/Notes';
import AddNote from './components/AddNoteHooks';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { NoteProvider } from './contexts/NoteContext';

const App = () => {
      return (
        <div className="container">
          <Header />
          <NoteProvider>
            <Switch>
             <Route 
             path="/" exact component={Notes} />
            <Route path="/add"  component={AddNote} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
            </Switch>
          </NoteProvider>
          <Footer />
        </div>
       );
};

export default App;