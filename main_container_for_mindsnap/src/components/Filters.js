import React from 'react';
import { FaSearch, FaBrain, FaLightbulb, FaClipboardCheck, FaBookOpen, FaSortAmountDown } from 'react-icons/fa';

/**
 * Filters component provides filtering, sorting, and search functionality for notes
 */
const Filters = ({ 
  searchQuery, 
  onSearchChange, 
  selectedType, 
  onTypeChange,
  sortBy,
  onSortChange
}) => {
  // Note type filter options
  const filterOptions = [
    { value: '', label: 'All', icon: null },
    { value: 'thought', label: 'Thoughts', icon: FaBrain },
    { value: 'idea', label: 'Ideas', icon: FaLightbulb },
    { value: 'reminder', label: 'Reminders', icon: FaClipboardCheck },
    { value: 'memory', label: 'Memories', icon: FaBookOpen },
  ];
  
  // Sort options
  const sortOptions = [
    { value: 'newest', label: 'Newest first' },
    { value: 'oldest', label: 'Oldest first' },
    { value: 'updated', label: 'Recently updated' },
  ];

  return (
    <div className="filters-container">
      <div className="search-container">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button 
              className="clear-search" 
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="filter-options">
        <div className="type-filters">
          {filterOptions.map(option => (
            <button
              key={option.value}
              className={`filter-btn ${selectedType === option.value ? 'active' : ''}`}
              onClick={() => onTypeChange(option.value)}
            >
              {option.icon && <option.icon />}
              <span>{option.label}</span>
            </button>
          ))}
        </div>

        <div className="sort-container">
          <FaSortAmountDown className="sort-icon" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
