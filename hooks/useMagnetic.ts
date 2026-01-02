import { useEffect, useRef, useState } from 'react';

export const useMagnetic = (strength: number = 20) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      const distance = Math.sqrt(x * x + y * y);
      
      if (distance < 150) {
        setPosition({ 
          x: (x / width) * strength, 
          y: (y / height) * strength 
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [strength]);

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
  };

  return { ref, style };
};