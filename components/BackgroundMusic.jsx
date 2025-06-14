import React, { useState, useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Set initial volume to 50%

    // Auto-start the music
    audioRef.current.play().catch(error => {
      console.error('Error playing audio:', error);
    });

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 right-4 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors z-50"
      title={isMuted ? 'Unmute Music' : 'Mute Music'}
    >
      {isMuted ? '🔇' : '🔊'}
    </button>
  );
};

export default BackgroundMusic; 