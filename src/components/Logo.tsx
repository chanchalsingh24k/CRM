import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="https://cdn2.vectorstock.com/i/1000x1000/56/26/cvk-logo-letter-design-vector-42535626.jpg"
        alt="CVK Logo"
        className="h-24 w-auto"
      />
    </div>
  );
};

export default Logo;
