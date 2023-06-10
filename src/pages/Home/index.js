import { useQuery } from '@apollo/client';
import { Box, Grid, Pagination, Paper, styled } from '@mui/material';

import { Filters, MovieCard, SelectedMoviesSection } from '../../components';
import { MOVIES_QUERY } from './queries';
import { useFilters, useMovies } from '../../hooks';

const MoviesContainer = styled(Paper)(({ theme }) => ({
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '280px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '545px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
  },
}));

const Home = () => {
  const { filter, setPage, setFilter } = useFilters();
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { filter },
  });
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const handlePagination = (e, page) => {
    // console.log('page:', page);
    setPage(page);
  };

  if (error) {
    console.log('Error on Home fetch:', error);
    // return 'Error in Home fetch';
  }

  const pagesCount =
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  const onSubmit = (filterData) => {
    // console.log('🚀 ~ filterData:', filterData);
    setFilter(filterData);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} style={{ border: '1px' }}>
        <Grid item xs={12}>
          <Paper sx={{ padding: '16px' }}>
            <Filters onSubmit={onSubmit} initialValue={filter} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} container justifyContent='center'>
          {/* <Paper
            style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
          > */}
          <MoviesContainer>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
              {loading && 'Loading...'}
              {data?.movies.results.length === 0 && (
                <p>No movies found matching your filters</p>
              )}
              {data && (
                <Grid container spacing={2}>
                  {data.movies.results.map((movie) => (
                    <Grid
                      key={movie.id}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      style={{ display: 'flex' }}
                    >
                      <MovieCard movie={movie} onCardSelect={selectMovie} />
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
        <Grid item xs={12} md={4} container justifyContent='center'>
          <SelectedMoviesSection
            selectedMovies={selectedMovies}
            deleteMovie={deleteMovie}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
