import { useState } from 'react';

export default function ImageWithLoader({ src, alt, height = '340px' }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="rounded-4 overflow-hidden position-relative w-100" 
      style={{ height: height, backgroundColor: '#f3f4f6' }} // Gray placeholder background
    >
      {/* Skeleton / Loading State */}
      {!isLoaded && (
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 placeholder-wave"
          style={{ zIndex: 1 }}
        >
          <span className="placeholder w-100 h-100 bg-secondary opacity-25"></span>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`w-100 h-100 object-fit-cover transition-opacity duration-500`}
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 0.4s ease-in-out' 
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}