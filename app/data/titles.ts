import type { Title } from '~/types'

export const featuredTitles: Title[] = [
  {
    id: 'title-1',
    title: 'Além do Horizonte',
    year: 2024,
    genre: 'Ficção Científica',
    rating: 8.5,
    poster: '/images/posters/horizonte.jpg',
    verified: true
  },
  {
    id: 'title-2',
    title: 'Noite em Lisboa',
    year: 2023,
    genre: 'Drama/Romance',
    rating: 7.8,
    poster: '/images/posters/lisboa.jpg',
    verified: true
  },
  {
    id: 'title-3',
    title: 'Código Vermelho',
    year: 2024,
    genre: 'Ação/Suspense',
    rating: 8.2,
    poster: '/images/posters/codigo.jpg',
    verified: true
  },
  {
    id: 'title-4',
    title: 'O Último Verão',
    year: 2022,
    genre: 'Comédia Dramática',
    rating: 7.5,
    poster: '/images/posters/verao.jpg',
    verified: true
  },
  {
    id: 'title-5',
    title: 'Sombras do Passado',
    year: 2024,
    genre: 'Mistério/Terror',
    rating: 8.0,
    poster: '/images/posters/sombras.jpg',
    verified: true
  },
  {
    id: 'title-6',
    title: 'Caminhos Cruzados',
    year: 2023,
    genre: 'Documentário',
    rating: 8.7,
    poster: '/images/posters/caminhos.jpg',
    verified: true
  }
] satisfies Title[]

export const getVerifiedTitles = () => featuredTitles.filter(t => t.verified)