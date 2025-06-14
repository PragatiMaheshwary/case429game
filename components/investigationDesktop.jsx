// investigationDesktop.jsx - Desktop view with suspect files

import React from 'react';
import { SUSPECTS_DATA } from './suspectData';

const InvestigationDesktop = ({ 
  availableSuspects = [], // provide default empty array
  completedSuspects = [], // provide default empty array
  onSuspectSelect 
}) => {
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
          <span className="text-sm text-gray-600 ml-4">Investigation Files</span>
        </div>
        <div className="text-sm text-gray-600">Mon Jun 22 9:41 AM</div>
      </div>

      {/* Desktop Background */}
      <div className="h-full bg-gradient-to-br from-blue-900 to-blue-800 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {availableSuspects.map((suspectId) => {
            const suspect = SUSPECTS_DATA[suspectId];
            // Add null check for suspect
            if (!suspect) {
              console.warn(`Suspect with ID ${suspectId} not found in SUSPECTS_DATA`);
              return null;
            }
            
            const isCompleted = completedSuspects.includes(suspectId);
            
            return (
              <div 
                key={suspectId}
                onClick={() => onSuspectSelect(suspectId)}
                className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 ${
                  isCompleted ? 'border-4 border-green-500' : ''
                }`}
              >
                <div className="relative h-48">
                  <img 
                    src={suspect.image || '/placeholder.png'} // Add fallback image
                    alt={suspect.name || 'Unknown Suspect'}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = '/placeholder.png'; // Fallback image on error
                    }}
                  />
                  {isCompleted && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                      Completed
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{suspect.name || 'Unknown'}</h3>
                  <p className="text-sm text-gray-600">{suspect.role || 'Role unknown'}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InvestigationDesktop;
