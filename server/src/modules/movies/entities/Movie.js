const { IMAGE_BASE_PATH } = process.env;

class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.originalTitle = movie.original_title;
    this.releaseDate = movie.release_date;
    this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
  }
}

module.exports = { Movie };
