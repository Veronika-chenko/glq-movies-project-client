function movies(parent, args, context) {
  // return context.prisma.link.findMany();
  return {
    page: 1,
    totalResults: 10,
    totalPages: 10,
    results: [
      {
        id: 1,
        originalTitle: 'Movie title',
        releaseDate: 'release date',
        posterPath: 'string path',
      },
    ],
  };
}

module.exports = {
  movies,
};
