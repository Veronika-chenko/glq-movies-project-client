export const getGenreNamesByIds = (genreFullList, genres) => {
  return genres
    .map((genreId) => genreFullList.find((genreObj) => genreObj.id === genreId))
    .filter((genre) => genre)
    .slice(0, 3)
    .map((genre) => genre.name)
    .join(', ');
};
