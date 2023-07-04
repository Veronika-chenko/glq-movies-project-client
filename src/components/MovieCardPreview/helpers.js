export const getGenreName = (genres) => {
  return genres
    .map((genre) => genre.name)
    .slice(0, 3)
    .join(', ');
};
