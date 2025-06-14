import React, { useState, useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Set initial volume to 50%

    // Add event listeners
    audioRef.current.addEventListener('play', () => setIsPlaying(true));
    audioRef.current.addEventListener('pause', () => setIsPlaying(false));
    audioRef.current.addEventListener('error', (e) => {
      console.error('Error playing audio:', e);
      setIsPlaying(false);
    });

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('play', () => setIsPlaying(true));
        audioRef.current.removeEventListener('pause', () => setIsPlaying(false));
        audioRef.current.removeEventListener('error', () => setIsPlaying(false));
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(error => {
              console.error('Error playing audio:', error);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex space-x-2">
      <button
        onClick={togglePlay}
        className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors z-50"
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
      <button
        onClick={toggleMute}
        className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors z-50"
        title={isMuted ? 'Unmute Music' : 'Mute Music'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
};

export default BackgroundMusic; 