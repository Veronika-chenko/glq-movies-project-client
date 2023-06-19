import { Paper, Stack, Box, Typography, styled } from '@mui/material';
import noMoviesImageSrc from '../../images/no_movies.png';
import {
  MovieCardSelected,
  SelectedMoviesForm,
  ConfirmModal,
} from '../../components';
import { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { AppContext } from '../../context/appContext';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 140px)',
  minHeight: '330px',
  position: 'sticky',
  top: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    maxWidth: '480px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '768px',
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
  },
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
  const [listName, setListName] = useState('');
  const [link, setLink] = useState('');
  const { state } = useContext(AppContext);
  const onSubmit = ({ listName }) => {
    // console.log('🚀 onSubmit ~ e:', e);
    const ids = selectedMovies.map(({ id }) => id);

    const link = `${
      window.location.pathname
    }/recommend?title=${listName}&locale=${state.locale}&ids=${ids.join()}`;
    // console.log('window.location.href', window.location.href);

    setListName(listName);
    setLink(link);
  };

  const onCloseConfirmModal = () => {
    setLink('');
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
            <FormattedMessage id='no_selected_movies' />
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
      <ConfirmModal
        title={listName}
        url={link}
        open={!!link}
        onClose={onCloseConfirmModal}
      />
    </SelectedMovies>
  );
};
