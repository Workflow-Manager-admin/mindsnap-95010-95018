/**
 * Utility functions for managing note data persistence in localStorage
 */
import { getSampleNotes } from './sampleData';

// Key used for storing notes in localStorage
const STORAGE_KEY = 'mindsnap_notes';
// Key to track if we've shown sample data
const SAMPLE_DATA_SHOWN_KEY = 'mindsnap_sample_shown';

/**
 * PUBLIC_INTERFACE
 * Loads notes from localStorage
 * If no notes exist and sample data hasn't been shown, returns sample data
 * @returns {Array} Array of note objects or sample data if none exist
 */
export const loadNotes = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    const parsedNotes = notes ? JSON.parse(notes) : [];
    
    // If no notes exist and we haven't shown sample data before,
    // return sample data and mark that we've shown it
    if (parsedNotes.length === 0 && !localStorage.getItem(SAMPLE_DATA_SHOWN_KEY)) {
      const sampleNotes = getSampleNotes();
      localStorage.setItem(SAMPLE_DATA_SHOWN_KEY, 'true');
      return sampleNotes;
    }
    
    return parsedNotes;
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
