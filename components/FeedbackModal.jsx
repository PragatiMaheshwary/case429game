// FeedbackModal.jsx - Modal for showing Sherlock's feedback
import React from 'react';
import { FEEDBACK_MESSAGES } from './gameLogic';

const FeedbackModal = ({ isOpen, onClose, feedbackType, onContinue }) => {
  if (!isOpen) return null;

  const feedback = FEEDBACK_MESSAGES[feedbackType];
  const isCorrect = feedbackType === 'correct';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4">
        <div className={`${isCorrect ? 'bg-green-600' : 'bg-blue-900'} text-white p-4 rounded-t-lg flex items-center space-x-3`}>
          <div className="w-12 h-12 bg-opacity-20 bg-white rounded-full flex items-center justify-center text-xl">
            🕵️
          </div>
          <h2 className="text-xl font-bold">Sherlock Holmes</h2>
        </div>
        
        <div className="p-6">
          <div className="prose max-w-none">
            <p className="text-gray-800 text-lg">{feedback.message}</p>
          </div>
          
          <div className="mt-6 flex justify-end space-x-4">
            {feedback.requiresHighlighting ? (
              <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Start Highlighting
              </button>
            ) : (
              <button
                onClick={onContinue}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                {isCorrect ? 'Finish Game' : 'Continue Investigation'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
