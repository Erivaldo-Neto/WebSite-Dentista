import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'gold-outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-sans font-medium tracking-widest uppercase transition-all duration-300 relative overflow-hidden flex items-center justify-center';

  const variants = {
    primary: 'bg-primary text-white border border-primary hover:bg-primary-hover',
    secondary: 'bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white hover:text-primary',
    outline: 'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/5',
    gold: 'bg-gold text-white border border-gold hover:bg-gold-light hover:border-gold-light',
    'gold-outline': 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-white'
  };

  const sizes = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3 text-xs md:text-sm',
    lg: 'px-10 py-4 text-sm md:text-base'
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
