import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /** primary = dourado sólido com efeito de luz animada | secondary = contorno branco com animação dourada */
  variant?: 'primary' | 'secondary';
  className?: string;
}

/**
 * Sistema de botões unificado do site Dr. Rodrigo Silva.
 * Implementa o efeito de luz animada (Uiverse) para o variante primário.
 */
export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  if (variant === 'primary') {
    return (
      <button className={`btn-primary ${className}`} {...props}>
        <div className="wrapper">
          {/* Círculos animados para o efeito de luz de fundo */}
          <div className="circle circle-12"></div>
          <div className="circle circle-11"></div>
          <div className="circle circle-10"></div>
          <div className="circle circle-9"></div>
          <div className="circle circle-8"></div>
          <div className="circle circle-7"></div>
          <div className="circle circle-6"></div>
          <div className="circle circle-5"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-1"></div>

          <span>{children}</span>
        </div>
      </button>
    );
  }

  return (
    <button className={`btn-secondary ${className}`} {...props}>
      {children}
    </button>
  );
};
