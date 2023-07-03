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
  position: 'relative',
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  width: '100%',
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
    error: moviesError,
    data: moviesData,
  } = useQuery(MOVIES_QUERY, {
    variables: { filter },
  });

  // retrieve genres:
  const { data: genresData, error: genresError } = useQuery(GENRES_QUERY);

  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const handlePagination = (e, page) => {
    // console.log('page:', page);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setPage(page);
  };

  if (moviesError || genresError) {
    moviesError
      ? console.log('moviesError on Home fetch:', moviesError)
      : console.log('genresError on Home fetch:', genresError);
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
          {genresData && (
            <FilterContainer>
              <Filters
                onSubmit={onSubmit}
                initialValue={filter}
                genres={genresData}
              />
            </FilterContainer>
          )}
        </Grid>
        <Grid item xs={12} md={8} container justifyContent='center'>
          <MoviesContainer>
            {moviesQueryLoading ? <Loader /> : null}
            {moviesData && genresData && (
              <Box sx={{ flexGrow: 1, padding: 2 }}>
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
              </Box>
            )}
            {/* using filter */}
            {!moviesQueryLoading && (
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
            )}
          </MoviesContainer>
        </Grid>
        <Grid item xs={12} md={4} container justifyContent='center' pb={2}>
          <SelectedMoviesSection
            selectedMovies={selectedMovies}
            deleteMovie={deleteMovie}
            genreFullList={genresData}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
