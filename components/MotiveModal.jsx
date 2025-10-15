// MotiveModal.jsx - Modal for selecting murder motive
import React from 'react';
import { MOTIVES } from './gameLogic';

const MotiveModal = ({ isOpen, onClose, onSelectMotive }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
        <div className="bg-blue-900 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">What was their motive?</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-3">
            {MOTIVES.map((motive, index) => (
              <button
                key={index}
                onClick={() => onSelectMotive(motive)}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
              >
                {motive}
              </button>
            ))}
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotiveModal;
