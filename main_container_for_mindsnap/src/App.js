import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import NoteInput from './components/NoteInput';
import Filters from './components/Filters';
import NoteList from './components/NoteList';
import { loadNotes, saveNotes } from './utils/storage';
import { createNote, updateNote, searchNotes, filterNotesByType, sortNotes } from './utils/noteUtils';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  
  // Load notes from local storage on initial render
  useEffect(() => {
    const savedNotes = loadNotes();
    setNotes(savedNotes);
  }, []);
  
  // Save notes to local storage whenever they change
  useEffect(() => {
    saveNotes(notes);
  }, [notes]);
  
  // Add a new note
  const handleAddNote = (content, type) => {
    const newNote = createNote(content, type);
    setNotes([newNote, ...notes]);
  };
  
  // Update an existing note
  const handleUpdateNote = (id, updates) => {
    setNotes(notes.map(note => 
      note.id === id ? updateNote(note, updates) : note
    ));
  };
  
  // Delete a note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };
  
  // Apply filtering, sorting, and searching to notes
  const getFilteredNotes = () => {
    let filteredNotes = [...notes];
    
    // First filter by type
    filteredNotes = filterNotesByType(filteredNotes, selectedType);
    
    // Then apply search query
    filteredNotes = searchNotes(filteredNotes, searchQuery);
    
    // Finally sort the notes
    return sortNotes(filteredNotes, sortBy);
  };
  
  const displayedNotes = getFilteredNotes();
  
  // Note counts are available here if needed in the future
  // const noteCounts = {
  //   total: notes.length,
  //   thought: notes.filter(n => n.type === 'thought').length,
  //   idea: notes.filter(n => n.type === 'idea').length,
  //   reminder: notes.filter(n => n.type === 'reminder').length,
  //   memory: notes.filter(n => n.type === 'memory').length,
  // };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <div className="app-wrapper">
            <NoteInput onAddNote={handleAddNote} />
            
            <div className="notes-section">
              <Filters 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
              
              {displayedNotes.length > 0 && (
                <div className="notes-info">
                  <p>
                    {displayedNotes.length} {displayedNotes.length === 1 ? 'note' : 'notes'} 
                    {searchQuery ? ' found' : ' total'}
                  </p>
                </div>
              )}
              
              <NoteList 
                notes={displayedNotes}
                onDeleteNote={handleDeleteNote}
                onUpdateNote={handleUpdateNote}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
