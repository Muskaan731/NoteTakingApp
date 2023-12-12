import React, { useState } from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onEdit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="note-list">
      <h2>Notes</h2>
      <input
        className="input-form"
        type="text"
        placeholder="Search notes"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredNotes.map((note, index) => (
        <NoteItem key={index} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default NoteList;
