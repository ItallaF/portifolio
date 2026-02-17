import 'react-responsive-carousel/lib/styles/carousel.min.css'

import clothes from '../../../../assets/img/projectos/Clothes.jpg'
import talktome from '../../../../assets/img/projectos/TalkToMe.jpg'
import rotport from '../../../../assets/img/projectos/Turism.jpg'
import portifolio from '../../../../assets/img/projectos/portifolio.jpg'

interface Project {
  title: string
  description: string
  tech: string
  image: string
  demo?: string
  code: string
}

export const projects: Project[] = [
  {
    title: 'Reviva Fashion',
    description:
      'Projeto desenvolvido no programa Up!Tech da Riachuelo em parceria com a Alura. Aplicação de e-commerce com página de produto e sacola.',
    tech: 'JavaScript, Sass, React, TypeScript, Styled Components e Next.js',
    image: clothes,
    demo: 'https://uptech-reviva-react-next-xi.vercel.app/',
    code: 'https://github.com/ItallaF/uptech-reviva-react-next/tree/Semana-10',
  },
  {
    title: 'Talk To Me',
    description:
      'Aplicação de reuniões online com criação e ingresso em salas virtuais.',
    tech: 'React, TypeScript, Tailwind, WebSocket e Next.js',
    image: talktome,
    demo: 'https://talk-to-me-beta.vercel.app/',
    code: 'https://github.com/ItallaF/Talk-to-me/tree/master/frontend',
  },
  {
    title: 'RotPort',
    description:
      'Aplicativo mobile turístico desenvolvido como TCC para incentivo à economia regional.',
    tech: 'React Native, TypeScript, Firebase e Google Maps Platform',
    image: rotport,
    code: 'https://github.com/ItallaF/RotPort',
  },
  {
    title: 'Portfólio',
    description:
      'Aplicação one-page para apresentação profissional e showcase de projetos.',
    tech: 'React, TypeScript, Styled Components e Swiper',
    image: portifolio,
    demo: 'https://portifolio-rho-six-31.vercel.app/',
    code: 'https://github.com/ItallaF/portifolio',
  },
]

