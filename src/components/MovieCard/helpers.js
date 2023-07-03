export const getGenreNamesByIds = (genreFullList, genres) => {
  return genres
    .map((genreId) => genreFullList.find((genreObj) => genreObj.id === genreId))
    .filter((genre) => genre)
    .slice(0, 3)
    .map((genre) => genre.name)
    .join(', ');
};

export const getGenreName = (genres) => {
  return genres
    .map((genre) => genre.name)
    .slice(0, 3)
    .join(', ');
};
