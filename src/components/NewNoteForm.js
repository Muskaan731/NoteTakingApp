import React, { useState } from "react";

function NewNoteForm({ onAddNote }) {
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      onAddNote(newNote);
      setNewNote("");
    }
  };

  return (
    <div className="new-note-form">
      <input
        className="input-form"
        type="text"
        placeholder="Add a new note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button className="add-button" onClick={handleAddNote}>Add Note</button>
    </div>
  );
}

export default NewNoteForm;
