import React from 'react';
import NoteCard from './NoteCard';
import { FaSadTear } from 'react-icons/fa';

/**
 * NoteList component renders a grid of NoteCard components
 */
const NoteList = ({ notes, onDeleteNote, onUpdateNote }) => {
  if (!notes || notes.length === 0) {
    return (
      <div className="empty-state">
        <FaSadTear className="empty-icon" />
        <p>No notes found</p>
        <p className="empty-subtitle">Add a new note to get started</p>
      </div>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDeleteNote}
          onUpdate={onUpdateNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
