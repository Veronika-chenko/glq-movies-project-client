import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { SelectMovieButton } from '../SelectMovieButton';

export const MovieCardSelected = ({ movie, onCardDelete }) => {
  return (
    <Card sx={{ position: 'relative', display: 'flex', minHeight: '164px' }}>
      <CardMedia
        component='img'
        sx={{ width: 100 }}
        image={movie.image}
        alt={movie.title}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          position: 'relative',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {movie.title}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, pt: 0 }}>
          {movie.genres?.length ? (
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              {movie.genres[0].name}
            </Typography>
          ) : null}
        </Box>
      </Box>
      <SelectMovieButton handleClick={() => onCardDelete(movie)}>
        <DeleteOutlineRoundedIcon sx={{ fontSize: 70 }} />
        <Typography variant='h6' gutterBottom component='div'>
          <FormattedMessage id='delete' />
        </Typography>
      </SelectMovieButton>
    </Card>
  );
};

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    genre: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
  onCardDelete: PropTypes.func.isRequired,
};
