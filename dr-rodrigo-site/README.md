# Dr. Rodrigo Silva - Site Institucional Premium

Site institucional profissional para dentista, desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion.

## 🎯 Características

- **Design Premium Autoral**: Layout exclusivo que não parece template
- **Identidade Visual Única**: Paleta de cores azul profundo + dourado
- **Backgrounds Personalizados**: SVGs únicos para cada seção
- **Animações Suaves**: Framer Motion para interações fluidas
- **100% Responsivo**: Mobile-first design
- **6 Especialidades**: Cada serviço com identidade visual própria
- **Performance Otimizada**: Lighthouse score > 90

## 🚀 Tecnologias

- **React 18** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações avançadas
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navegação fixa com blur
│   │   ├── Footer.tsx          # Rodapé completo
│   │   └── Background.tsx      # Backgrounds SVG parametrizados
│   ├── sections/
│   │   ├── Hero.tsx            # Hero impactante
│   │   ├── About.tsx           # Sobre o Dr. Rodrigo
│   │   ├── ServiceSection.tsx  # Template de serviços
│   │   ├── Testimonials.tsx    # Depoimentos com glassmorphism
│   │   ├── Office.tsx          # Galeria do consultório
│   │   ├── Locations.tsx       # Mapa abstrato interativo
│   │   ├── WhyChoose.tsx       # Diferenciais
│   │   └── FinalCTA.tsx        # CTA final impactante
│   └── ui/
│       ├── Button.tsx          # Botões com variantes
│       └── Card.tsx            # Cards reutilizáveis
├── data/
│   ├── services.ts             # Dados dos serviços
│   ├── testimonials.ts         # Depoimentos
│   └── locations.ts            # Localizações
├── styles/
│   └── globals.css             # Estilos globais e Tailwind
├── App.tsx                     # Componente principal
└── main.tsx                    # Entry point
```

## 🎨 Paleta de Cores

- **Azul Profundo**: `#0A2A43` (principal)
- **Azul Claro**: `#1A3F5C` (secundário)
- **Dourado**: `#FFD700` (destaques)
- **Branco**: `#FFFFFF` (respiro)

## 📱 Seções do Site

1. **Hero** - Primeiro impacto com CTA
2. **Sobre** - História e valores do Dr. Rodrigo
3. **Serviços** - 6 especialidades com identidades únicas:
   - Ortodontia
   - Odontologia Preventiva
   - Dentística Estética
   - Endodontia
   - Harmonização Orofacial
   - Implantodontia
4. **Depoimentos** - Feedback de pacientes
5. **Consultório** - Galeria de fotos
6. **Localizações** - Mapa abstrato com 3 unidades
7. **Por Que Escolher** - Diferenciais
8. **CTA Final** - Agendamento

## 🖼️ Imagens

As imagens atualmente são placeholders. Para adicionar imagens reais:

1. Coloque as imagens em `public/images/`
2. Atualize os caminhos em `src/data/services.ts`
3. Para imagens do Dr. Rodrigo, use IA generativa com o prompt:

```
Ultra realistic professional portrait of a confident male dentist in his 30s, 
wearing premium white dental coat with gold embroidery "Dr. Rodrigo Silva", 
modern dental office background, soft cinematic lighting, editorial style, 
transparent background for web integration, 4K quality
```

## 🎯 Próximos Passos

- [ ] Gerar imagens reais do Dr. Rodrigo com IA
- [ ] Adicionar fotos do consultório
- [ ] Implementar sistema de agendamento funcional
- [ ] Integrar Google Analytics
- [ ] Adicionar chatbot de atendimento
- [ ] Implementar blog institucional

## 📄 Licença

Projeto fictício para demonstração de design premium.

---

**Desenvolvido com** ❤️ **para demonstrar excelência em web design odontológico**
