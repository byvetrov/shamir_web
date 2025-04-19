import React, { ReactNode, useRef, useEffect, useState } from 'react';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number; // Positive values move slower, negative values move faster
  className?: string;
}

const ParallaxLayer = ({ children, speed = 0.5, className = '' }: ParallaxLayerProps) => {
  const layerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translation = scrollY * speed;

  return (
    <div
      ref={layerRef}
      className={`absolute inset-0 will-change-transform hw-accelerated ${className}`}
      style={{
        transform: `translate3d(0, ${translation}px, 0)`, // Use translate3d for hardware acceleration
        transition: 'transform 0.05s linear', // Small transition for smoother movement
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
