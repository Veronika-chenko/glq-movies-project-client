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
import { MOVIES_QUERY } from './queries';
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
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { filter },
  });
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const handlePagination = (e, page) => {
    // console.log('page:', page);
    setPage(page);
  };

  if (loading) {
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
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  const onSubmit = (filterData) => {
    // console.log('🚀 ~ filterData:', filterData);
    setFilter(filterData);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} style={{ border: '1px' }}>
        <Grid item xs={12} container justifyContent='center'>
          <FilterContainer>
            <Filters onSubmit={onSubmit} initialValue={filter} />
          </FilterContainer>
        </Grid>
        <Grid item xs={12} md={8} container justifyContent='center'>
          <MoviesContainer>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
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
