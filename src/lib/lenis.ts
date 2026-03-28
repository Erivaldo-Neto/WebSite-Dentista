import Lenis from 'lenis'

// Respeitar usuários com sensibilidade a movimento
const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches : false

let lenisInstance: Lenis | null = null

export function getLenis(): Lenis | null {
  if (prefersReducedMotion) return null // scroll nativo para quem prefere

  if (!lenisInstance && typeof window !== 'undefined') {
    lenisInstance = new Lenis({
      // Usar lerp em vez de duration para um efeito de "momentum" mais orgânico e reativo em todas as fontes
      lerp: 0.1,             // Ajustado para um equilíbrio ideal (nem pesado, nem sensível demais)
      orientation: 'vertical',
      gestureOrientation: 'vertical', // Garante consistência em touchpads e telas touch
      smoothWheel: true,
      syncTouch: true,        // Fundamental para unificar o scroll do mobile/laptop com o desktop
      touchMultiplier: 1.1,   // Ajustado para o equilíbrio ideal
      wheelMultiplier: 1.0,   // Ajustado para um controle mais preciso
      autoResize: true,       // Observa mudanças no DOM automaticamente
      infinite: false,
    })

    // Adicionar classe ao HTML para controle via CSS
    document.documentElement.classList.add('lenis')
    document.documentElement.classList.add('lenis-smooth')
  }
  return lenisInstance
}

export function destroyLenis() {
  if (lenisInstance) {
    document.documentElement.classList.remove('lenis')
    document.documentElement.classList.remove('lenis-smooth')
    lenisInstance.destroy()
    lenisInstance = null
  }
}
