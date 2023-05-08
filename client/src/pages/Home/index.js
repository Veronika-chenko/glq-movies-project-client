import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { MovieCard } from '../../components';
import { MOVIES_QUERY } from './queries';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 140px)',
  position: 'sticky',
  top: theme.spacing(2),
}));

const Home = () => {
  const { loading, error, data } = useQuery(MOVIES_QUERY);

  if (error) {
    return 'Error in Home fetch';
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} style={{ border: '1px' }}>
        <Grid item xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
              {loading && 'Loading...'}
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
                      <MovieCard movie={movie} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>Selected movies</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
