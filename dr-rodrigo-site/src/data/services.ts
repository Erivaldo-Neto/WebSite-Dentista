export interface Service {
  id: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  images: string[];
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
    headline: 'O caminho para o sorriso que você sempre quis',
    description: 'Tratamentos ortodônticos personalizados com aparelhos fixos, móveis ou invisíveis. Tecnologia de ponta para alinhar seus dentes com conforto e resultados previsíveis.',
    benefits: [
      'Diagnóstico digital 3D completo',
      'Aparelhos estéticos discretos',
      'Acompanhamento contínuo personalizado',
      'Resultados duradouros e naturais'
    ],
    images: [
      '/images/ortodontia-1.jpg',
      '/images/ortodontia-2.jpg',
      '/images/ortodontia-3.jpg'
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
    headline: 'Cuidado contínuo para um sorriso sempre saudável',
    description: 'Consultas preventivas, limpezas profissionais e orientações para manter sua saúde bucal impecável. Prevenção é o melhor tratamento.',
    benefits: [
      'Exames periódicos completos',
      'Limpeza profissional detalhada',
      'Orientação de higiene personalizada',
      'Detecção precoce de problemas'
    ],
    images: [
      '/images/preventiva-1.jpg',
      '/images/preventiva-2.jpg'
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
    headline: 'Transforme seu sorriso com naturalidade e beleza',
    description: 'Restaurações estéticas, clareamento dental, lentes de contato e facetas. Procedimentos que respeitam sua individualidade e realçam sua beleza natural.',
    benefits: [
      'Procedimentos minimamente invasivos',
      'Materiais de última geração',
      'Resultados naturais e harmoniosos',
      'Planejamento digital do sorriso'
    ],
    images: [
      '/images/estetica-1.jpg',
      '/images/estetica-2.jpg',
      '/images/estetica-3.jpg',
      '/images/estetica-4.jpg'
    ],
    visualIdentity: {
      primaryColor: '#F8F9FA',
      secondaryColor: '#FFD700',
      backgroundType: 'soft',
      graphicElements: ['light-rays', 'sparkles', 'soft-glow']
    }
  },
  {
    id: 'endodontia',
    title: 'Endodontia',
    headline: 'Tratamento de canal com precisão e conforto',
    description: 'Procedimentos endodônticos realizados com tecnologia de ponta e máximo conforto. Salvamos dentes que pareciam perdidos.',
    benefits: [
      'Tecnologia de microscopia operatória',
      'Procedimento indolor e rápido',
      'Materiais biocompatíveis modernos',
      'Alta taxa de sucesso'
    ],
    images: [
      '/images/endodontia-1.jpg',
      '/images/endodontia-2.jpg'
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
    headline: 'Equilíbrio e naturalidade para o seu rosto',
    description: 'Procedimentos estéticos faciais que valorizam sua beleza natural. Toxina botulínica, preenchimentos e bioestimuladores com técnica refinada.',
    benefits: [
      'Avaliação facial completa',
      'Técnicas minimamente invasivas',
      'Resultados naturais e harmoniosos',
      'Protocolos personalizados'
    ],
    images: [
      '/images/harmonizacao-1.jpg',
      '/images/harmonizacao-2.jpg',
      '/images/harmonizacao-3.jpg'
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
    headline: 'Reconstrua seu sorriso com segurança e durabilidade',
    description: 'Implantes dentários de última geração, próteses fixas e reabilitações completas. Devolvemos função, estética e autoestima.',
    benefits: [
      'Planejamento 3D cirúrgico',
      'Implantes premium importados',
      'Próteses de alta precisão',
      'Carga imediata quando possível'
    ],
    images: [
      '/images/implantes-1.jpg',
      '/images/implantes-2.jpg',
      '/images/implantes-3.jpg'
    ],
    visualIdentity: {
      primaryColor: '#0A2A43',
      secondaryColor: '#4A90E2',
      backgroundType: 'structured',
      graphicElements: ['foundation-grid', 'pillar-structure', 'stability-lines']
    }
  }
];
