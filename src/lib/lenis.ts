import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function getLenis(): Lenis | null {
  if (!lenisInstance && typeof window !== 'undefined') {
    lenisInstance = new Lenis({
      // Configurações otimizadas para um efeito "premium" e deslizante
      duration: 1.2,          // Duração um pouco maior para suavidade
      lerp: 0.08,             // Lerp ligeiramente menor para mais "momentum"
      wheelMultiplier: 1.1,   // Mais responsivo ao scroll do mouse
      touchMultiplier: 1.5,   // Toque mais fluido
      smoothWheel: true,
      syncTouch: true,        // Mantém a paridade entre touch e mouse
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      autoResize: true,
    })

    // Adicionar classes ao HTML para controle via CSS
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
