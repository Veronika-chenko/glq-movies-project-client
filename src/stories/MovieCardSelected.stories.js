import { MovieCardSelected } from '../components/MovieCardSelected';

import { movies } from './stub';

export default {
  title: 'Cards/Movie card selected',
  component: MovieCardSelected,
  // tags: ['autodocs'],
};

export const Primary = {
  args: {
    movie: movies[0],
  },
};
