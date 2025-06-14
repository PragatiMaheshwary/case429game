// AnswerKey.jsx - Draggable answer key component

import React from 'react';
import { SUSPECTS_DATA, CLASSIFICATION_TYPES, getCorrectClassifications } from './suspectData';

const AnswerKey = ({ 
  suspectId, 
  playerClassifications, 
  position, 
  setPosition, 
  onClose 
}) => {
  const suspect = SUSPECTS_DATA[suspectId];
  const correctClassifications = getCorrectClassifications(suspectId);

  const getClassificationColor = (type) => {
    return CLASSIFICATION_TYPES[type]?.color || '';
  };

  const handleMouseDown = (e) => {
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;
    
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX - startX,
        y: e.clientY - startY
      });
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  if (!suspect) return null;

  return (
    <div 
      className="fixed bg-white rounded-lg shadow-2xl border-2 border-blue-500 z-50 max-w-lg w-full"
      style={{ 
        left: position.x, 
        top: position.y,
        maxHeight: '80vh',
        overflow: 'auto'
      }}
    >
      <div 
        className="bg-blue-500 text-white p-4 cursor-move flex items-center justify-between"
        onMouseDown={handleMouseDown}
      >
        <h3 className="font-semibold">Answer Key - {suspect.name}</h3>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200"
        >
          ✕
        </button>
      </div>
      
      <div className="p-4">
        <div className="space-y-2 text-sm">
          {suspect.summary.map((sentence) => {
            const correctType = correctClassifications[sentence.id];
            const userType = playerClassifications[sentence.id];
            const isCorrect = userType === correctType;
            
            return (
              <div 
                key={sentence.id}
                className={`p-2 rounded border-2 ${getClassificationColor(correctType)} ${
                  !isCorrect ? 'border-red-600 border-dashed' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-xs">{sentence.id.toUpperCase()}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      correctType === 'accurate' ? 'bg-green-600 text-white' :
                      correctType === 'misrepresentation' ? 'bg-red-600 text-white' :
                      'bg-purple-600 text-white'
                    }`}>
                      {correctType.charAt(0).toUpperCase() + correctType.slice(1)}
                    </span>
                    {!isCorrect && (
                      <span className="text-red-600 text-xs font-bold">
                        ❌ Your answer: {userType || 'None'}
                      </span>
                    )}
                    {isCorrect && (
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    )}
                  </div>
                </div>
                <p className="text-xs">{sentence.text}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h4 className="font-semibold text-sm mb-2">Legend:</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-200 border border-green-400 rounded"></div>
              <span>Accurate</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-200 border border-red-400 rounded"></div>
              <span>Misrepresentation</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-purple-200 border border-purple-400 rounded"></div>
              <span>Hallucination</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            ❌ = Your incorrect classification | ✓ = Correct classification
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnswerKey;