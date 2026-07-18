import React, { useState } from 'react';

const InteractiveOptions = ({ options, type, onSelect }) => {
  const [selectedChips, setSelectedChips] = useState([]);

  if (!options || options.length === 0) return null;

  const handleChipClick = (opt) => {
    if (type === 'multi-select') {
      const newSelection = selectedChips.includes(opt)
        ? selectedChips.filter(c => c !== opt)
        : [...selectedChips, opt];
      
      // If they click 'None', maybe clear others? But simple logic is fine for now
      setSelectedChips(newSelection);
    } else {
      onSelect([opt]); // single choice
    }
  };

  const handleMultiSelectSubmit = () => {
    if (selectedChips.length > 0) {
      onSelect(selectedChips);
    }
  };

  return (
    <div className="interactive-options">
      {options.map((opt, i) => (
        <button
          key={i}
          className={`option-chip ${selectedChips.includes(opt) ? 'selected' : ''}`}
          onClick={() => handleChipClick(opt)}
        >
          {opt}
        </button>
      ))}
      
      {type === 'multi-select' && (
        <button 
          className="submit-multi-select" 
          onClick={handleMultiSelectSubmit}
          disabled={selectedChips.length === 0}
        >
          Confirm Selection
        </button>
      )}
    </div>
  );
};

export default InteractiveOptions;
