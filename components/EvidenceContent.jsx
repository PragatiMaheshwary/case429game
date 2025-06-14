import React from 'react';

const EvidenceContent = ({ content }) => {
  const renderContent = (item) => {
    // Check if the content is a markdown-style image
    const imageMatch = item.match(/!\[(.*?)\]\((.*?)\)/);
    if (imageMatch) {
      const [_, alt, src] = imageMatch;
      return (
        <div className="my-4">
          <img 
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg shadow-md object-contain max-h-[400px]"
            onError={(e) => {
              console.error(`Failed to load image: ${src}`);
              e.target.src = '/financial-records-eddie.png';
            }}
          />
        </div>
      );
    }

    // Check if the item is just a bullet point
    if (item.startsWith('•')) {
      return (
        <div className="flex items-start space-x-2 my-1">
          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
          <p>{item.substring(1).trim()}</p>
        </div>
      );
    }

    // Regular text content
    return <p className="my-2 text-gray-700">{item}</p>;
  };

  return (
    <div className="space-y-2">
      {Array.isArray(content) 
        ? content.map((item, index) => (
            <div key={index}>
              {renderContent(item)}
            </div>
          ))
        : renderContent(content)
      }
    </div>
  );
};

export default EvidenceContent; 