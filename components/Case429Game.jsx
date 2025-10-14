// Case429Game.jsx - Main game component (restructured)

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { SUSPECTS_DATA } from './suspectData';
import InvestigationDesktop from './investigationDesktop';
import SuspectSummary from './suspectSummary';
import BackgroundMusic from './BackgroundMusic';

const Case429Game = () => {
  const [gameState, setGameState] = useState('news'); // news, chat, summary, investigation
  const [chatStep, setChatStep] = useState(0);
  const [classifications, setClassifications] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [completedSuspects, setCompletedSuspects] = useState([]);
  const [availableSuspects, setAvailableSuspects] = useState(['flora']);
  const [currentSuspect, setCurrentSuspect] = useState('flora');

  const chatSequence = [
    { speaker: 'sherlock', text: 'HEY WATSON! DID YOU SEE THE NEWS?!' },
    { speaker: 'sherlock', text: 'Scotland Yard used the new AI tool trained on thousands of murder cases and accused Flora Jasmine for the murder of her step-father Sir Eric Harpe.' },
    { speaker: 'sherlock', text: 'But, I don\'t think she did it.' },
    { speaker: 'sherlock', text: 'I have it all figured out, but can YOU prove Scotland Yard wrong, Watson?' },
    { speaker: 'user', text: 'I am up for a challenge!' },
    { speaker: 'sherlock', text: 'Amazing! Start by proving Flora\'s innocence to gain access to files on other suspects so we can find the actual murderer.' },
    { speaker: 'user', text: 'Got it!' },
    { speaker: 'sherlock', text: 'Here\'s the AI summary that Scotland Yard looked at to accuse Flora. Go through it thoroughly. You can verify each piece of information by accessing its source. The source of information can be accessed if you hover and click on a sentence. There are 3 color highlighters which you can use to mark each line as ,"Accurate", "Misinformation" and "Hallucination". This way even I can track what you infer from the AI summary.' }
  ];

  const handleNewsClick = () => {
    setShowNotification(true);
  };

  const handleNotificationClick = () => {
    setShowNotification(false);
    setGameState('chat');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatStep(1);
    }, 1500);
  };

  const handleChatContinue = () => {
    if (chatStep < chatSequence.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatStep(chatStep + 1);
      }, 1000);
    } else {
      setGameState('summary');
    }
  };

  const handleSuspectComplete = (suspectId) => {
    if (!completedSuspects.includes(suspectId)) {
      setCompletedSuspects(prev => [...prev, suspectId]);
    }
    
    // Unlock all suspects after Flora is completed
    if (suspectId === 'flora') {
      setAvailableSuspects(['flora', 'eddie', 'cecilia', 'eric', 'ferris']);
    }
  };

  const handleSuspectSelect = (suspectId) => {
    setCurrentSuspect(suspectId);
    setGameState('summary');
  };

  const handleBackToDesktop = () => {
    setGameState('investigation');
  };

  const renderNews = () => (
    <div className="h-screen bg-gray-100 relative">
      {/* macOS Browser Bar */}
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600 ml-4">The Murder of Sir Eric Harpe</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Mon Jun 22</span>
          <span>9:41 AM</span>
        </div>
      </div>

      {/* News Content */}
      <div className="h-full bg-gradient-to-b from-red-800 to-red-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <img 
                  src="/Flora.png" 
                  alt="Flora Jasmine"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Breaking News */}
              <div className="bg-red-600 text-white p-8 flex flex-col justify-center">
                <div className="bg-red-500 text-white px-4 py-2 rounded mb-4 inline-block">
                  <h2 className="text-2xl font-bold">Breaking News</h2>
                </div>
                <h1 className="text-3xl font-bold leading-tight">
                  Flora Jasmine arrested for the murder of Billionaire Step-father Sir Eric Harpe
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sherlock Notification Popup */}
      {!showNotification && (
        <div className="fixed bottom-8 left-8">
          <div 
            onClick={handleNewsClick}
            className="bg-blue-900 text-white p-4 rounded-lg shadow-2xl cursor-pointer hover:shadow-3xl transition-all max-w-xs"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-lg">
                🕵️
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">Sherlock Holmes</div>
                <div className="text-xs text-blue-200">New Message</div>
              </div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="text-sm">
              HEY WATSON! DID...
            </div>
          </div>
        </div>
      )}

      {/* Full Notification Modal */}
      {showNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full m-4">
            <div className="bg-blue-900 text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-xl">
                  🕵️
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Sherlock Holmes</div>
                  <div className="text-sm text-blue-200">Detective</div>
                </div>
                <button 
                  onClick={() => setShowNotification(false)}
                  className="text-blue-200 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-800">
                  "HEY WATSON! DID YOU LOOK AT THE NEWS?! Scotland Yard used the new AI tool trained on thousands of murder cases and accused Flora Jasmine for the murder of her step-father Sir Eric Harpe."
                </p>
              </div>
              <div className="text-center">
                <button 
                  onClick={handleNotificationClick}
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                >
                  Open Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderChat = () => (
    <div className="h-screen bg-gray-100">
      {/* macOS Browser Bar */}
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600 ml-4">To: Sherlock</span>
        </div>
        <div className="text-sm text-gray-600">Guides</div>
      </div>

      <div className="h-full flex">
        {/* Chat Panel */}
        <div className="w-1/3 bg-gray-300 p-6 flex flex-col">
          {/* Sherlock Avatar */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl">
              🕵️
            </div>
            <span className="font-semibold text-gray-800">To: Sherlock</span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto">
            {chatSequence.slice(0, chatStep + 1).map((message, index) => (
              <div key={index} className={`${
                message.speaker === 'sherlock' ? 'text-left' : 'text-right'
              }`}>
                <div className={`inline-block max-w-xs p-3 rounded-lg ${
                  message.speaker === 'sherlock' 
                    ? 'bg-white text-gray-800' 
                    : 'bg-green-500 text-white'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="text-left">
                <div className="inline-block bg-white p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          {!isTyping && chatStep < chatSequence.length - 1 && chatSequence[chatStep + 1].speaker === 'user' && (
            <div className="mt-4">
              <div className="flex items-center space-x-2 bg-white rounded-lg p-2">
                <input 
                  type="text"
                  value={chatSequence[chatStep + 1].text}
                  readOnly
                  className="flex-1 border-none outline-none bg-transparent"
                />
                <button 
                  onClick={handleChatContinue}
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                >
                  →
                </button>
              </div>
            </div>
          )}

          {/* Continue Button for Sherlock messages */}
          {!isTyping && chatStep < chatSequence.length - 1 && chatSequence[chatStep + 1].speaker === 'sherlock' && (
            <button 
              onClick={handleChatContinue}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              →
            </button>
          )}

          {chatStep === chatSequence.length - 1 && !isTyping && (
            <button 
              onClick={() => setGameState('summary')}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Download Flora's AI Summary</span>
            </button>
          )}
        </div>

        {/* News Display */}
        <div className="flex-1 bg-gradient-to-b from-red-800 to-red-900 flex items-center justify-center">
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src="/Flora.png" 
                    alt="Flora Jasmine"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="bg-red-600 text-white p-6 flex flex-col justify-center">
                  <div className="bg-red-500 text-white px-3 py-1 rounded mb-3 inline-block">
                    <h2 className="text-lg font-bold">Breaking News</h2>
                  </div>
                  <h1 className="text-xl font-bold leading-tight">
                    Flora Jasmine arrested for the murder of Step-father Sir Eric Harpe
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      {gameState === 'news' && renderNews()}
      {gameState === 'chat' && renderChat()}
      {gameState === 'summary' && (
        <SuspectSummary 
          suspectId={currentSuspect}
          classifications={classifications}
          setClassifications={setClassifications}
          isCompleted={completedSuspects.includes(currentSuspect)}
          onComplete={handleSuspectComplete}
          onBackToDesktop={handleBackToDesktop}
        />
      )}
      {gameState === 'investigation' && (
        <InvestigationDesktop
          availableSuspects={availableSuspects}
          completedSuspects={completedSuspects}
          onSuspectSelect={handleSuspectSelect}
        />
      )}
      <BackgroundMusic />
    </div>
  );
};

export default Case429Game;