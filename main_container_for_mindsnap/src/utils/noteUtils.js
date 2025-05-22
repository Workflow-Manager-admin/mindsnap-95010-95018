import { v4 as uuidv4 } from 'uuid';

/**
 * PUBLIC_INTERFACE
 * Creates a new note object with required properties
 * @param {string} content Content of the note
 * @param {string} type Type of note ('idea', 'memory', 'reminder', etc.)
 * @returns {Object} New note object
 */
export const createNote = (content, type = 'thought') => {
  return {
    id: uuidv4(),
    content,
    type,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isPinned: false,
  };
};

/**
 * PUBLIC_INTERFACE
 * Updates an existing note
 * @param {Object} note The note to update
 * @param {Object} updates Properties to update
 * @returns {Object} Updated note object
 */
export const updateNote = (note, updates) => {
  return {
    ...note,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * PUBLIC_INTERFACE
 * Searches notes based on query text
 * @param {Array} notes Array of notes to search through
 * @param {string} query Search query
 * @returns {Array} Filtered notes matching the query
 */
export const searchNotes = (notes, query) => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return notes;
  
  return notes.filter(note => 
    note.content.toLowerCase().includes(searchTerm) ||
    note.type.toLowerCase().includes(searchTerm)
  );
};

/**
 * PUBLIC_INTERFACE
 * Filters notes by type
 * @param {Array} notes Array of notes to filter
 * @param {string} type Type to filter by (or null for all)
 * @returns {Array} Filtered notes matching the type
 */
export const filterNotesByType = (notes, type) => {
  if (!type) return notes;
  return notes.filter(note => note.type === type);
};

/**
 * PUBLIC_INTERFACE
 * Sorts notes based on criteria
 * @param {Array} notes Array of notes to sort
 * @param {string} sortBy Sort criteria ('newest', 'oldest', 'updated')
 * @returns {Array} Sorted array of notes
 */
export const sortNotes = (notes, sortBy = 'newest') => {
  const pinnedNotes = notes.filter(note => note.isPinned);
  const unpinnedNotes = notes.filter(note => !note.isPinned);
  
  const sortFunctions = {
    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    updated: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
  };
  
  const sortFunction = sortFunctions[sortBy] || sortFunctions.newest;
  
  return [
    ...pinnedNotes.sort(sortFunction),
    ...unpinnedNotes.sort(sortFunction)
  ];
};
