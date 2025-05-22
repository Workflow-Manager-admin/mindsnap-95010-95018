/**
 * Sample data generator for MindSnap app
 * Provides initial notes for better visualization
 */

/**
 * PUBLIC_INTERFACE
 * Returns an array of sample notes data
 * @returns {Array} Array of sample note objects
 */
export const getSampleNotes = () => {
  return [
    {
      id: 'sample-1',
      content: 'Quantum computing algorithms could revolutionize how we approach artificial intelligence by processing complex neural networks exponentially faster than traditional computing.',
      type: 'thought',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      isPinned: true,
    },
    {
      id: 'sample-2',
      content: 'Neural interface concept: Develop a non-invasive brain-computer interface using advanced EEG technology combined with machine learning to interpret and execute thought commands.',
      type: 'idea',
      createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 2 days ago
      updatedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
      isPinned: false,
    },
    {
      id: 'sample-3',
      content: 'Research the latest papers on electromagnetic field theory for potential applications in sustainable energy generation.',
      type: 'reminder',
      createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
      updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      isPinned: false,
    },
    {
      id: 'sample-4',
      content: 'That moment when the neural network first achieved self-optimization without explicit programming - the emergence of true machine learning in our lab.',
      type: 'memory',
      createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(), // 3 days ago
      updatedAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
      isPinned: true,
    },
    {
      id: 'sample-5',
      content: 'The symbiotic relationship between human cognition and artificial intelligence could lead to a new form of enhanced intelligence that compensates for the limitations of both.',
      type: 'thought',
      createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(), // 36 hours ago
      updatedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
      isPinned: false,
    },
    {
      id: 'sample-6',
      content: 'Design a self-organizing knowledge database that adapts its structure based on usage patterns and information relationships rather than predefined categories.',
      type: 'idea',
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
      updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      isPinned: false,
    }
  ];
};
