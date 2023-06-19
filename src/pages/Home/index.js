import { useQuery } from '@apollo/client';
import {
  Box,
  Grid,
  Pagination,
  Paper,
  Typography,
  styled,
} from '@mui/material';

import {
  Filters,
  Loader,
  MovieCard,
  SelectedMoviesSection,
} from '../../components';
import { MOVIES_QUERY, GENRES_QUERY } from './queries';
import { useFilters, useMovies } from '../../hooks';

const FilterContainer = styled(Paper)(({ theme }) => ({
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '480px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '768px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
    width: '100%',
  },
}));

const MoviesContainer = styled(Paper)(({ theme }) => ({
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '480px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '768px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
  },
}));

export const Home = () => {
  const { filter, setPage, setFilter } = useFilters();

  // retrieve movies:
  const {
    loading: moviesQueryLoading,
    error,
    data: moviesData,
  } = useQuery(MOVIES_QUERY, {
    variables: { filter },
  });

  // retrieve genres:
  const { loading: genresQueryLoading, data: genresData } =
    useQuery(GENRES_QUERY);

  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const handlePagination = (e, page) => {
    // console.log('page:', page);
    setPage(page);
  };

  if (moviesQueryLoading || genresQueryLoading) {
    return <Loader />;
  }

  if (error) {
    console.log('Error on Home fetch:', error);
    return (
      <Typography>
        Oops, something went wrong. Please, try again later
      </Typography>
    );
  }

  const pagesCount =
    moviesData?.movies?.totalPages <= 500
      ? moviesData?.movies?.totalPages
      : 500;

  const onSubmit = (filterData) => {
    // console.log('🚀 ~ filterData:', filterData);
    setFilter(filterData);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} style={{ border: '1px' }}>
        <Grid item xs={12} container justifyContent='center'>
          <FilterContainer>
            <Filters
              onSubmit={onSubmit}
              initialValue={filter}
              genres={genresData}
            />
          </FilterContainer>
        </Grid>
        <Grid item xs={12} md={8} container justifyContent='center'>
          <MoviesContainer>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
              {moviesData?.movies.results.length === 0 && (
                <p>No movies found matching your filters</p>
              )}
              {moviesData && (
                <Grid container spacing={2}>
                  {moviesData.movies.results.map((movie) => (
                    <Grid
                      key={movie.id}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      style={{ display: 'flex' }}
                    >
                      <MovieCard
                        movie={movie}
                        onCardSelect={selectMovie}
                        genreFullList={genresData.genres}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
            <Box
              mt={2}
              pb={2}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Pagination
                count={pagesCount}
                page={filter.page}
                onChange={handlePagination}
              />
            </Box>
          </MoviesContainer>
        </Grid>
        <Grid item xs={12} md={4} container justifyContent='center' pb={2}>
          <SelectedMoviesSection
            selectedMovies={selectedMovies}
            deleteMovie={deleteMovie}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
