import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'elevated' | 'outlined';
  className?: string;
  hover?: boolean;
}

export const Card = ({ 
  children, 
  variant = 'default', 
  className = '',
  hover = true 
}: CardProps) => {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg',
    glass: 'glassmorphism',
    elevated: 'bg-white shadow-2xl',
    outlined: 'bg-transparent border-2 border-primary/20'
  };
  
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
