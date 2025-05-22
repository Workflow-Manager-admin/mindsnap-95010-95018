import React, { useState } from 'react';
import { FaPlus, FaLightbulb, FaClipboardCheck, FaBookOpen } from 'react-icons/fa';

/**
 * NoteInput component allows users to create new notes
 */
const NoteInput = ({ onAddNote }) => {
  const [content, setContent] = useState('');
  const [type, setType] = useState('thought');
  const [isExpanded, setIsExpanded] = useState(false);

  // Note type options
  const noteTypes = [
    { value: 'thought', icon: FaBrain, label: 'Thought' },
    { value: 'idea', icon: FaLightbulb, label: 'Idea' },
    { value: 'reminder', icon: FaClipboardCheck, label: 'Reminder' },
    { value: 'memory', icon: FaBookOpen, label: 'Memory' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onAddNote(content, type);
      setContent('');
      setIsExpanded(false);
    }
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleKeyDown = (e) => {
    // Submit on Ctrl/Cmd + Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className={`note-input-container ${isExpanded ? 'expanded' : ''}`}>
      <form onSubmit={handleSubmit} className="note-input-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder="Capture your thought..."
          className="note-input"
          rows={isExpanded ? 3 : 1}
        />
        
        {isExpanded && (
          <div className="note-input-footer">
            <div className="note-type-selector">
              {noteTypes.map((noteType) => {
                const Icon = noteType.icon;
                return (
                  <button
                    key={noteType.value}
                    type="button"
                    className={`type-btn ${type === noteType.value ? 'active' : ''}`}
                    onClick={() => setType(noteType.value)}
                    title={noteType.label}
                  >
                    <Icon />
                    <span>{noteType.label}</span>
                  </button>
                );
              })}
            </div>
            <button type="submit" className="btn add-note-btn">
              <FaPlus /> <span>Add Note</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default NoteInput;
