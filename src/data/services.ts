export interface Service {
  id: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  image: string;
  images: string[];
  hasBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
  visualIdentity: {
    primaryColor: string;
    secondaryColor: string;
    backgroundType: 'geometric' | 'organic' | 'technical' | 'soft' | 'structured' | 'fluid';
    graphicElements: string[];
  };
}

export const services: Service[] = [
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    headline: 'O caminho para o **sorriso** que você sempre quis',
    description: 'Alinhar seus dentes é o começo de uma transformação. Aparelhos fixos ou invisíveis com acompanhamento próximo e personalizado.',
    benefits: [
      'Diagnóstico digital 3D completo',
      'Aparelhos estéticos discretos',
      'Acompanhamento contínuo personalizado',
      'Resultados duradouros e naturais'
    ],
    image: '/images/versao-depois-ortodontia.webp',
    hasBeforeAfter: true,
    beforeImage: '/images/versao-antes-ortodontia.webp',
    afterImage: '/images/versao-depois-ortodontia.webp',
    images: [
      '/images/versao-antes-ortodontia.webp',
      '/images/versao-depois-ortodontia.webp',
    ],
    visualIdentity: {
      primaryColor: '#1A3F5C',
      secondaryColor: '#FFD700',
      backgroundType: 'geometric',
      graphicElements: ['parallel-lines', 'symmetry-grid', 'alignment-guides']
    }
  },
  {
    id: 'preventiva',
    title: 'Odontologia Preventiva',
    headline: 'Cuidado **contínuo** para um sorriso sempre **saudável**',
    description: 'Cuido do seu sorriso hoje para que ele dure para sempre. Exames, limpezas e orientações que previnem antes de tratar.',
    benefits: [
      'Exames periódicos completos',
      'Limpeza profissional detalhada',
      'Orientação de higiene personalizada',
      'Detecção precoce de problemas'
    ],
    image: '/images/rodrigo-Odontologia-preventivo.webp',
    images: [
      '/images/rodrigo-Odontologia-preventivo.webp',
    ],
    visualIdentity: {
      primaryColor: '#FFFFFF',
      secondaryColor: '#1A3F5C',
      backgroundType: 'organic',
      graphicElements: ['soft-circles', 'protection-shield', 'concentric-waves']
    }
  },
  {
    id: 'estetica',
    title: 'Dentística Estética',
    headline: 'Transforme seu sorriso com **naturalidade** e **beleza**',
    description: 'Restauro a beleza do seu sorriso respeitando o que é naturalmente seu. Clareamento, facetas e lentes com resultado que você vai amar.',
    benefits: [
      'Procedimentos minimamente invasivos',
      'Materiais de última geração',
      'Resultados naturais e harmoniosos',
      'Planejamento digital do sorriso'
    ],
    image: '/images/dentistica-estetica-section.webp',
    images: [
      '/images/dentistica-estetica-section.webp',
    ],
    visualIdentity: {
      primaryColor: '#FFFFFF',
      secondaryColor: '#FFD700',
      backgroundType: 'soft',
      graphicElements: ['light-rays', 'sparkles', 'soft-glow']
    }
  },
  {
    id: 'endodontia',
    title: 'Endodontia',
    headline: 'Tratamento de canal com **precisão** e **conforto**',
    description: 'Salvo dentes que pareciam perdidos — com tecnologia, precisão e o máximo de conforto para você.',
    benefits: [
      'Tecnologia de microscopia operatória',
      'Procedimento indolor e rápido',
      'Materiais biocompatíveis modernos',
      'Alta taxa de sucesso'
    ],
    image: '/images/Endodontia-section.webp',
    images: [
      '/images/Endodontia-section.webp',
    ],
    visualIdentity: {
      primaryColor: '#0A2A43',
      secondaryColor: '#00D9FF',
      backgroundType: 'technical',
      graphicElements: ['wireframes', 'zoom-focus', 'precision-grid']
    }
  },
  {
    id: 'harmonizacao',
    title: 'Harmonização Orofacial',
    headline: 'Equilíbrio e **naturalidade** para o seu rosto',
    description: 'Realço sua beleza natural com técnica refinada e um olhar artístico. Resultados sutis que valorizam quem você já é.',
    benefits: [
      'Avaliação facial completa',
      'Técnicas minimamente invasivas',
      'Resultados naturais e harmoniosos',
      'Protocolos personalizados'
    ],
    image: '/images/harmonizacao-section.webp',
    images: [
      '/images/harmonizacao-section.webp',
    ],
    visualIdentity: {
      primaryColor: '#FFF5F5',
      secondaryColor: '#FFB6C1',
      backgroundType: 'fluid',
      graphicElements: ['smooth-curves', 'flow-lines', 'organic-shapes']
    }
  },
  {
    id: 'implantes',
    title: 'Implantodontia',
    headline: 'Reconstrua seu sorriso com **segurança** e **durabilidade**',
    description: 'Devolvo sua função, sua estética e sua autoestima. Implantes de última geração com planejamento 3D individualizado.',
    benefits: [
      'Planejamento 3D cirúrgico',
      'Implantes premium importados',
      'Próteses de alta precisão',
      'Recuperação rápida e retorno imediato à sua rotina'
    ],
    image: '/images/Implante-section.webp',
    images: [
      '/images/Implante-section.webp',
    ],
    visualIdentity: {
      primaryColor: '#0A2A43',
      secondaryColor: '#4A90E2',
      backgroundType: 'structured',
      graphicElements: ['foundation-grid', 'pillar-structure', 'stability-lines']
    }
  }
];
