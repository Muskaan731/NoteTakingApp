import React, { useState } from "react";

function NoteItem({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleSaveEdit = () => {
    onEdit(note, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <div>
          <input
            className="input-form"
            type="text"
            value={editedNote}
            onChange={(e) => setEditedNote(e.target.value)}
          />
          <button className="add-button" onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <p>{note}</p>
          <button className="delete-button" onClick={() => onDelete(note)}>Delete</button>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
