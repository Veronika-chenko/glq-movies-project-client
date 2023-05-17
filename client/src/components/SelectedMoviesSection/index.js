import { Paper, Stack, Box, Typography, styled } from '@mui/material';
import noMoviesImageSrc from '../../images/no_movies.png';
import { MovieCardSelected } from '../MovieCardSelected';
import { SelectedMoviesForm } from '../SelectedMoviesForm';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 140px)',
  position: 'sticky',
  top: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
}));

const MoviesList = styled(Stack)(({ theme }) => ({
  overflowY: 'scroll',
  height: '100%',
}));

const NoMovies = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const SelectedMoviesSection = ({ selectedMovies, deleteMovie }) => {
  const onSubmit = ({ listName }) => {
    // console.log('🚀 onSubmit ~ e:', e);
    const ids = selectedMovies.map(({ id }) => id);

    const link = `${
      window.location.host
    }/recommend?title=${listName}&ids=${ids.join()}`;

    console.log('🚀 ~ link:', link);
  };
  if (!selectedMovies.length) {
    return (
      <SelectedMovies>
        <NoMovies>
          <Box
            component='img'
            sx={{
              width: '50%',
              opacity: '.6',
            }}
            alt='no selected movies'
            src={noMoviesImageSrc}
          />
          <Typography variant='h5' mt={2}>
            No selected movies
          </Typography>
        </NoMovies>
      </SelectedMovies>
    );
  }

  return (
    <SelectedMovies>
      <MoviesList spacing={2}>
        {selectedMovies.map((movie) => (
          <MovieCardSelected
            key={movie.id}
            movie={movie}
            onCardDelete={deleteMovie}
          />
        ))}
      </MoviesList>
      <Box pt={2}>
        <SelectedMoviesForm onSubmit={onSubmit} />
      </Box>
    </SelectedMovies>
  );
};
