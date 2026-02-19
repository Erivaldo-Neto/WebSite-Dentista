interface BackgroundProps {
  variant: 'hero' | 'geometric' | 'organic' | 'technical' | 'soft' | 'structured' | 'fluid';
  className?: string;
}

export const Background = ({ variant, className = '' }: BackgroundProps) => {
  const renderHero = () => (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A2A43" />
          <stop offset="100%" stopColor="#051520" />
        </linearGradient>
        <radialGradient id="glow" cx="80%" cy="30%">
          <stop offset="0%" stopColor="rgba(255,215,0,0.15)" />
          <stop offset="100%" stopColor="rgba(255,215,0,0)" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#heroGradient)" />
      <circle cx="80%" cy="30%" r="400" fill="url(#glow)" />
      <path d="M0,200 Q400,100 800,200 T1600,200" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M0,400 Q300,300 600,400 T1200,400" stroke="#FFD700" strokeWidth="1.5" fill="none" opacity="0.2" />
      <g opacity="0.1">
        {[...Array(20)].map((_, i) => (
          <circle key={i} cx={Math.random() * 100 + '%'} cy={Math.random() * 100 + '%'} r="2" fill="#FFD700" />
        ))}
      </g>
    </svg>
  );

  const renderGeometric = () => (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1A3F5C" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#0A2A43" />
      <rect width="100%" height="100%" fill="url(#grid)" />
      <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#FFD700" strokeWidth="2" opacity="0.5" />
      <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
    </svg>
  );

  const renderOrganic = () => (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="organicGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F4F8" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#organicGlow)" />
      <circle cx="20%" cy="20%" r="300" fill="#1A3F5C" opacity="0.03" />
      <circle cx="80%" cy="60%" r="400" fill="#1A3F5C" opacity="0.04" />
      <path d="M0,300 Q200,200 400,300 T800,300" stroke="#1A3F5C" strokeWidth="2" fill="none" opacity="0.1" />
      <path d="M0,500 Q300,400 600,500 T1200,500" stroke="#1A3F5C" strokeWidth="1.5" fill="none" opacity="0.08" />
    </svg>
  );

  const renderTechnical = () => (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0A2A43" />
      <g opacity="0.2">
        <circle cx="50%" cy="50%" r="200" fill="none" stroke="#00D9FF" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="300" fill="none" stroke="#00D9FF" strokeWidth="0.5" />
        <circle cx="50%" cy="50%" r="400" fill="none" stroke="#00D9FF" strokeWidth="0.5" />
        <line x1="30%" y1="50%" x2="70%" y2="50%" stroke="#00D9FF" strokeWidth="1" />
        <line x1="50%" y1="30%" x2="50%" y2="70%" stroke="#00D9FF" strokeWidth="1" />
      </g>
      <g opacity="0.1">
        {[...Array(10)].map((_, i) => (
          <rect 
            key={i} 
            x={Math.random() * 90 + '%'} 
            y={Math.random() * 90 + '%'} 
            width="30" 
            height="30" 
            fill="none" 
            stroke="#FFD700" 
            strokeWidth="1" 
          />
        ))}
      </g>
    </svg>
  );

  const renderSoft = () => (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="softGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8F9FA" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#softGradient)" />
      <ellipse cx="30%" cy="40%" rx="400" ry="300" fill="#FFD700" opacity="0.08" filter="url(#blur)" />
      <ellipse cx="70%" cy="60%" rx="500" ry="350" fill="#1A3F5C" opacity="0.05" filter="url(#blur)" />
      <circle cx="50%" cy="30%" r="3" fill="#FFD700" opacity="0.3" />
      <circle cx="40%" cy="70%" r="2" fill="#FFD700" opacity="0.4" />
      <circle cx="60%" cy="50%" r="2.5" fill="#FFD700" opacity="0.35" />
    </svg>
  );

  const renderStructured = () => (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0A2A43" />
      <g opacity="0.3">
        <rect x="20%" y="30%" width="15" height="40%" fill="#4A90E2" />
        <rect x="35%" y="20%" width="15" height="50%" fill="#4A90E2" />
        <rect x="50%" y="25%" width="15" height="45%" fill="#FFD700" />
        <rect x="65%" y="20%" width="15" height="50%" fill="#4A90E2" />
        <line x1="15%" y1="70%" x2="85%" y2="70%" stroke="#FFD700" strokeWidth="3" />
      </g>
      <g opacity="0.2">
        {[...Array(5)].map((_, i) => (
          <line 
            key={i}
            x1={20 + i * 15 + '%'} 
            y1="70%" 
            x2={20 + i * 15 + '%'} 
            y2={30 - i * 3 + '%'} 
            stroke="#4A90E2" 
            strokeWidth="2" 
          />
        ))}
      </g>
    </svg>
  );

  const renderFluid = () => (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fluidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5F5" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#fluidGradient)" />
      <path d="M0,200 Q200,150 400,200 T800,200 L800,600 Q600,550 400,600 T0,600 Z" 
            fill="#FFB6C1" opacity="0.1" />
      <path d="M0,300 Q300,250 600,300 T1200,300" 
            stroke="#FFB6C1" strokeWidth="2" fill="none" opacity="0.2" />
      <path d="M0,400 Q250,370 500,400 T1000,400" 
            stroke="#FFB6C1" strokeWidth="1.5" fill="none" opacity="0.15" />
      <circle cx="80%" cy="20%" r="150" fill="#FFB6C1" opacity="0.08" />
    </svg>
  );

  const variants = {
    hero: renderHero,
    geometric: renderGeometric,
    organic: renderOrganic,
    technical: renderTechnical,
    soft: renderSoft,
    structured: renderStructured,
    fluid: renderFluid
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variants[variant]()}
    </div>
  );
};
