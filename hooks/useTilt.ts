
import React, { useState, useCallback } from 'react';

/**
 * Hook to create a 3D tilt effect on an element based on mouse movements.
 */
export const useTilt = (intensity: number = 10) => {
  const [tiltStyle, setTiltStyle] = useState({});

  // Fix: Explicitly imported React and used React.MouseEvent for type safety
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * intensity;
    const rotateY = ((centerX - x) / centerX) * intensity;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none'
    });
  }, [intensity]);

  const onMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    });
  }, []);

  return { tiltStyle, onMouseMove, onMouseLeave };
};
