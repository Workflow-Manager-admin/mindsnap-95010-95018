/**
 * Utility functions for managing note data persistence in localStorage
 */

// Key used for storing notes in localStorage
const STORAGE_KEY = 'mindsnap_notes';

/**
 * PUBLIC_INTERFACE
 * Loads notes from localStorage
 * @returns {Array} Array of note objects or empty array if none exist
 */
export const loadNotes = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error loading notes from localStorage:', error);
    return [];
  }
};

/**
 * PUBLIC_INTERFACE
 * Saves notes to localStorage
 * @param {Array} notes Array of note objects to save
 */
export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving notes to localStorage:', error);
  }
};
