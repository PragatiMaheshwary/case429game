// SuspectSummary.jsx - Individual suspect analysis component

import React, { useState } from 'react';
import { Download, Search } from 'lucide-react';
import { SUSPECTS_DATA, CLASSIFICATION_TYPES, getCorrectClassifications, checkClassificationAccuracy, checkAllClassified } from './suspectData';
import AnswerKey from './answerKey';
import EvidenceContent from './EvidenceContent';

const SuspectSummary = ({ 
  suspectId, 
  classifications, 
  setClassifications,
  isCompleted,
  onComplete,
  onBackToDesktop 
}) => {
  const [selectedSentence, setSelectedSentence] = useState(null);
  const [showEvidence, setShowEvidence] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [feedbackMessages, setFeedbackMessages] = useState([]);
  const [answerKeyPosition, setAnswerKeyPosition] = useState({ x: 100, y: 100 });

  const suspect = SUSPECTS_DATA[suspectId];
  if (!suspect) return <div>Suspect not found</div>;

  const handleSentenceClick = (sentenceId) => {
    setSelectedSentence(sentenceId);
    setShowEvidence(true);
  };

  const handleClassification = (sentenceId, type) => {
    setClassifications(prev => ({
      ...prev,
      [sentenceId]: type
    }));
    setShowEvidence(false);
    setSelectedSentence(null);
  };

  const getClassificationColor = (type) => {
    return CLASSIFICATION_TYPES[type]?.color || '';
  };

  const handleDecision = (decision) => {
    if (!checkAllClassified(suspectId, classifications)) {
      alert("Please classify all sentences before making a decision.");
      return;
    }

    const isAccurate = checkClassificationAccuracy(suspectId, classifications);
    let message = "";

    if (decision === 'inconclusive') {
      if (isAccurate) {
        message = `Excellent work on ${suspect.name}! Your classifications were accurate. This analysis will help us understand the case better.`;
      } else {
        message = `Good analysis of ${suspect.name}, but I noticed some misclassifications. Here's the corrected version for your reference.`;
        setShowAnswerKey(true);
      }
    } else { // guilty
      if (isAccurate) {
        message = `Interesting theory about ${suspect.name}. Your classifications were correct, but consider all the evidence carefully before making final accusations.`;
      } else {
        message = `Your analysis of ${suspect.name} has some classification errors that may have influenced your conclusion. Review the corrections.`;
        setShowAnswerKey(true);
      }
    }

    setFeedbackMessages(prev => [...prev, { speaker: 'sherlock', text: message }]);
  };

  const handleContinueInvestigation = () => {
    onComplete(suspectId);
    onBackToDesktop();
  };

  // If this suspect is completed, show the correct classifications
  const displayClassifications = isCompleted ? getCorrectClassifications(suspectId) : classifications;

  return (
    <div className="h-screen bg-gray-100">
      {/* macOS Browser Bar */}
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600 ml-4">{suspect.name} - AI Summary</span>
        </div>
        <div className="text-sm text-gray-600">Mon Jun 22 9:41 AM</div>
      </div>

      <div className="h-full flex">
        {/* Chat Panel */}
        <div className="w-1/3 bg-gray-300 p-6 flex flex-col">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl">
              🕵️
            </div>
            <span className="font-semibold text-gray-800">To: Sherlock</span>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg">
              <p>Analyzing <strong>{suspect.name}</strong>'s file. {isCompleted ? 'This file shows the correct classifications.' : 'Classify each sentence based on the evidence.'}</p>
            </div>
            
            <button 
              onClick={onBackToDesktop}
              className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center space-x-2"
            >
              <span>← Back to Desktop</span>
            </button>

            {!isCompleted && (
              <>
                <div className="bg-white p-3 rounded-lg">
                  <p>When you're ready, let me know if you think {suspect.name} is actually guilty or if the evidence is not sufficient to convict them.</p>
                </div>

                {/* Display feedback messages */}
                {feedbackMessages.map((message, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white text-sm">
                        🕵️
                      </div>
                      <div className="flex-1">
                        <p><strong>Sherlock:</strong> {message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleDecision('guilty')}
                    disabled={!checkAllClassified(suspectId, classifications)}
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                      checkAllClassified(suspectId, classifications) 
                        ? 'bg-red-400 text-white hover:bg-red-500' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Guilty
                  </button>
                  <button 
                    onClick={() => handleDecision('inconclusive')}
                    disabled={!checkAllClassified(suspectId, classifications)}
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                      checkAllClassified(suspectId, classifications) 
                        ? 'bg-blue-400 text-white hover:bg-blue-500' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Inconclusive
                  </button>
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 text-sm text-gray-600">
                  Classified: {Object.keys(classifications).filter(key => key.startsWith(suspect.summary[0].id.split('_')[0])).length}/{suspect.summary.length} sentences
                  {!checkAllClassified(suspectId, classifications) && (
                    <p className="text-red-600 mt-1">Please classify all sentences before making a decision.</p>
                  )}
                </div>
              </>
            )}

            {/* Show Continue Investigation Button */}
            {feedbackMessages.length > 0 && (
              <button 
                onClick={handleContinueInvestigation}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Continue Investigation
              </button>
            )}
          </div>
        </div>

        {/* Summary Document */}
        <div className="flex-1 bg-blue-900 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Document Window */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Document Header */}
              <div className="bg-gray-100 px-6 py-4 border-b flex items-center justify-between">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="font-semibold">{suspect.name} - AI Summary</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-200 border border-green-400 rounded"></div>
                    <span className="text-xs">Accurate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-200 border border-red-400 rounded"></div>
                    <span className="text-xs">Misrepresentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-200 border border-purple-400 rounded"></div>
                    <span className="text-xs">Hallucination</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold mb-2">Suspiciousness Rating – 85%</h1>
                  <p className="text-lg text-gray-600">Analysis of {suspect.name} ({suspect.role})</p>
                </div>

                <div className="space-y-3">
                  <p className="mb-4"><strong>Summary:</strong></p>
                  
                  {suspect.summary.map((sentence) => (
                    <div 
                      key={sentence.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        displayClassifications[sentence.id] ? getClassificationColor(displayClassifications[sentence.id]) : 'hover:bg-gray-50'
                      }`}
                      onClick={() => !isCompleted && handleSentenceClick(sentence.id)}
                    >
                      {sentence.text}
                      {displayClassifications[sentence.id] && (
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium">
                            {displayClassifications[sentence.id].charAt(0).toUpperCase() + displayClassifications[sentence.id].slice(1)}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Character Card */}
            <div className="mt-6 flex justify-end">
              <div className="bg-blue-500 p-4 rounded-lg shadow-lg">
                <div className="w-24 h-24 bg-white rounded-lg mb-2 overflow-hidden">
                  <img 
                    src={suspect.image} 
                    alt={suspect.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-semibold text-center">{suspect.name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Answer Key */}
      {showAnswerKey && (
        <AnswerKey 
          suspectId={suspectId}
          playerClassifications={classifications}
          position={answerKeyPosition}
          setPosition={setAnswerKeyPosition}
          onClose={() => setShowAnswerKey(false)}
        />
      )}

      {/* Evidence Modal */}
      {showEvidence && selectedSentence !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full m-4 max-h-96 overflow-y-auto">
            <div className="bg-gray-100 px-6 py-4 border-b flex items-center justify-between">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-semibold">{suspect.evidence[selectedSentence]?.title || 'Evidence'}</span>
              <button 
                onClick={() => setShowEvidence(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  {suspect.evidence[selectedSentence]?.title || 'Evidence'}
                </h3>
                <div className="text-sm text-gray-600 mb-4">
                  📄 Source: {suspect.evidence[selectedSentence]?.pdfSource || 'Evidence File'}
                </div>
              </div>
              
              <EvidenceContent content={suspect.evidence[selectedSentence]?.content || ['Evidence not available for this sentence.']} />

              <div className="mt-6 flex space-x-2">
                <button 
                  onClick={() => handleClassification(selectedSentence, 'accurate')}
                  className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Accurate
                </button>
                <button 
                  onClick={() => handleClassification(selectedSentence, 'misrepresentation')}
                  className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Misrepresentation
                </button>
                <button 
                  onClick={() => handleClassification(selectedSentence, 'hallucination')}
                  className="flex-1 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  Hallucination
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuspectSummary;