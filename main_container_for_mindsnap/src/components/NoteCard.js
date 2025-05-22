import React, { useState } from 'react';
import { 
  FaTrash, 
  FaEdit, 
  FaThumbtack, 
  FaRegSave, 
  FaTimes, 
  FaLightbulb, 
  FaClipboardCheck, 
  FaBookOpen,
  FaBrain
} from 'react-icons/fa';

/**
 * NoteCard component displays an individual note with options to edit, delete, and pin
 */
const NoteCard = ({ note, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(note.content);
  const [editType, setEditType] = useState(note.type);
  
  const handleSave = () => {
    if (editContent.trim()) {
      onUpdate(note.id, { 
        content: editContent, 
        type: editType 
      });
      setIsEditing(false);
    }
  };
  
  const handleCancel = () => {
    setEditContent(note.content);
    setEditType(note.type);
    setIsEditing(false);
  };
  
  const togglePin = () => {
    onUpdate(note.id, { isPinned: !note.isPinned });
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  // Get icon based on note type
  const getNoteIcon = () => {
    switch (note.type) {
      case 'idea':
        return <FaLightbulb />;
      case 'reminder':
        return <FaClipboardCheck />;
      case 'memory':
        return <FaBookOpen />;
      default:
        return <FaBrain />;
    }
  };
  
  // Note type options for editing
  const noteTypes = [
    { value: 'thought', icon: FaBrain, label: 'Thought' },
    { value: 'idea', icon: FaLightbulb, label: 'Idea' },
    { value: 'reminder', icon: FaClipboardCheck, label: 'Reminder' },
    { value: 'memory', icon: FaBookOpen, label: 'Memory' },
  ];
  
  return (
    <div className={`note-card ${note.isPinned ? 'pinned' : ''} ${note.type}`}>
      <div className="note-header">
        <div className="note-type">
          {getNoteIcon()}
          <span className="note-type-label">{note.type}</span>
        </div>
        <div className="note-actions">
          <button 
            onClick={togglePin} 
            className={`action-btn pin-btn ${note.isPinned ? 'active' : ''}`}
            title={note.isPinned ? 'Unpin' : 'Pin to top'}
          >
            <FaThumbtack />
          </button>
          {!isEditing ? (
            <>
              <button 
                onClick={() => setIsEditing(true)} 
                className="action-btn edit-btn"
                title="Edit"
              >
                <FaEdit />
              </button>
              <button 
                onClick={() => onDelete(note.id)} 
                className="action-btn delete-btn"
                title="Delete"
              >
                <FaTrash />
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={handleSave} 
                className="action-btn save-btn"
                title="Save"
              >
                <FaRegSave />
              </button>
              <button 
                onClick={handleCancel} 
                className="action-btn cancel-btn"
                title="Cancel"
              >
                <FaTimes />
              </button>
            </>
          )}
        </div>
      </div>
      
      <div className="note-body">
        {isEditing ? (
          <>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="edit-content"
              rows={3}
              autoFocus
            />
            <div className="edit-type-selector">
              {noteTypes.map((typeOption) => {
                const Icon = typeOption.icon;
                return (
                  <button
                    key={typeOption.value}
                    type="button"
                    className={`type-btn ${editType === typeOption.value ? 'active' : ''}`}
                    onClick={() => setEditType(typeOption.value)}
                    title={typeOption.label}
                  >
                    <Icon />
                    <span>{typeOption.label}</span>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <p className="note-content">{note.content}</p>
        )}
      </div>
      
      <div className="note-footer">
        <div className="note-date" title={`Created: ${formatDate(note.createdAt)}`}>
          {formatDate(note.updatedAt)}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
