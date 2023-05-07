import { MovieCard } from '../components/MovieCard';

import { movies } from './stub';

export default {
  title: 'Cards/Movie card',
  component: MovieCard,
  // tags: ['autodocs'],
};

export const Primary = {
  args: {
    movie: movies[0],
  },
};
