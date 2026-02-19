export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  treatment?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Beatriz',
    location: 'São Paulo',
    text: 'O Dr. Rodrigo transformou minha autoestima. Além da técnica impecável, o cuidado e a atenção em cada consulta fizeram toda a diferença. Hoje sorrio sem vergonha!',
    treatment: 'Ortodontia e Estética'
  },
  {
    id: '2',
    name: 'Carlos Eduardo',
    location: 'Campinas',
    text: 'Sempre tive medo de dentista, mas o Dr. Rodrigo e sua equipe me acolheram de forma incrível. O tratamento foi tranquilo e o resultado superou minhas expectativas.',
    treatment: 'Implantes'
  },
  {
    id: '3',
    name: 'Mariana Costa',
    location: 'Santos',
    text: 'Profissionalismo e humanidade em cada atendimento. O Dr. Rodrigo explica tudo com clareza e paciência. Recomendo de olhos fechados!',
    treatment: 'Harmonização Orofacial'
  }
];
