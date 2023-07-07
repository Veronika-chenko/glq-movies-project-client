import {
  Box,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Typography,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { SelectMovieButton } from '../SelectMovieButton';
import { CardMenu } from '../CardMenu';

export const MovieCardSelected = ({ movie, onCardDelete }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        display: 'flex',
        minHeight: '164px',
      }}
    >
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
        <CardContent sx={{ flex: '1 0 auto', pr: { xs: '44px', md: '16px' } }}>
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
      {/* delete card for small screen */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <CardMenu>
          <MenuItem onClick={() => onCardDelete(movie)}>
            <FormattedMessage id='delete' />
          </MenuItem>
        </CardMenu>
      </Box>
      {/* delete card for big screen */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <SelectMovieButton handleClick={() => onCardDelete(movie)}>
          <DeleteOutlineRoundedIcon sx={{ fontSize: 70 }} />
          <Typography variant='h6' gutterBottom component='div'>
            <FormattedMessage id='delete' />
          </Typography>
        </SelectMovieButton>
      </Box>
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
