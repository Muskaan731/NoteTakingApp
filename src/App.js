import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NewNoteForm from "./components/NewNoteForm";
import Notification from "./components/Notification";
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  

  const addNote = (newNote) => {
    setIsLoading(true);
    setTimeout(() => {
      if (newNote.trim() !== "") {
        setNotes([...notes, newNote]);
        setNotification({massage:"Note added successfully.", type:"success"});
        setIsLoading(false);
      } else {
        setNotification({massage:"Note cannot be empty." , type:"error"});
        setIsLoading(false);
      }
    }, 100); // Simulate a delay
  };

  const deleteNote = (noteToDelete) => {
    setIsLoading(true);
    setTimeout(() => {
      const updatedNotes = notes.filter((note) => note !== noteToDelete);
      setNotes(updatedNotes);
      setNotification({massage:"Note deleted successfully.", type:"warning"});
      setIsLoading(false);
    }, 1000); // Simulate a delay
  };

  const editNote = (oldNote, newNote) => {
    setIsLoading(true);
    setTimeout(() => {
      const updatedNotes = notes.map((note) =>
        note === oldNote ? newNote : note
      );
      setNotes(updatedNotes);
      setEditingNote(null);
      setNotification({massage:"Note edited successfully.", type:"success"});
      setIsLoading(false);
    }, 1000); // Simulate a delay
  };

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      {notification && (
      <Notification
        message={notification.massage}
        type={notification.type}
        onClose={() => setNotification(null)}
      />
    )}
      {isLoading && <div className="loading">Loading...</div>}
      <NewNoteForm onAddNote={addNote} />
      <NoteList
        notes={notes}
        onDelete={deleteNote}
        onEdit={editNote}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
      />
    </div>
  );
}

export default App;
