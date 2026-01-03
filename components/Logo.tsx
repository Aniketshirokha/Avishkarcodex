
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 48, light = false }) => {
  const color = light ? "#FFFFFF" : "#0A2540";
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Dot Pattern based on user image */}
      {/* Row 1 */}
      <circle cx="10" cy="15" r="3" fill={color} />
      <circle cx="30" cy="10" r="4" fill={color} />
      <circle cx="50" cy="15" r="5" fill={color} />
      <circle cx="70" cy="10" r="4" fill={color} />
      <circle cx="90" cy="15" r="3" fill={color} />
      
      {/* Row 2 */}
      <circle cx="20" cy="30" r="4" fill={color} />
      <circle cx="40" cy="25" r="5" fill={color} />
      <circle cx="60" cy="25" r="5" fill={color} />
      <circle cx="80" cy="30" r="4" fill={color} />
      
      {/* Row 3 - Interaction with center */}
      <circle cx="15" cy="50" r="3" fill={color} />
      <circle cx="30" cy="45" r="5" fill={color} />
      <circle cx="70" cy="45" r="5" fill={color} />
      <circle cx="85" cy="50" r="3" fill={color} />
      
      {/* Row 4 */}
      <circle cx="20" cy="70" r="4" fill={color} />
      <circle cx="40" cy="75" r="5" fill={color} />
      <circle cx="60" cy="75" r="5" fill={color} />
      <circle cx="80" cy="70" r="4" fill={color} />
      
      {/* Row 5 */}
      <circle cx="10" cy="85" r="3" fill={color} />
      <circle cx="30" cy="90" r="4" fill={color} />
      <circle cx="50" cy="85" r="5" fill={color} />
      <circle cx="70" cy="90" r="4" fill={color} />
      <circle cx="90" cy="85" r="3" fill={color} />

      {/* Central Brand Mark */}
      <circle cx="50" cy="50" r="18" fill={color} />
      <path 
        d="M44 58H47.5L48.2 55.5H51.8L52.5 58H56L51.8 44H48.2L44 58ZM50 49L51.2 53H48.8L50 49Z" 
        fill={light ? "#0A2540" : "#FFFFFF"} 
        stroke={light ? "#0A2540" : "#FFFFFF"}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Logo;
