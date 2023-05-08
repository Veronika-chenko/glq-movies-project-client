import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
  query {
    movies {
      page
      totalResults
      totalPages
      results {
        id
        title: originalTitle
        image: posterPath
        releaseDate(format: "dd.MM.yyyy")
        # backdropPath
        # adult
        # voteCount
        # voteAvarage
      }
    }
  }
`;