import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Typography,
} from '@mui/material';
import { getGenreNamesByIds, getGenreName } from './helpers';

import { CardMenu } from '../CardMenu';
import { MovieDetailsModal } from '../MovieDetailsModal';

export const MovieCard = ({
  movie,
  onCardSelect,
  isPreviewCard,
  genreFullList,
}) => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const genres = genreFullList
    ? getGenreNamesByIds(genreFullList, movie.genres)
    : getGenreName(movie.genres);

  return (
    <>
      <Card sx={{ position: 'relative', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component='img'
              height='auto'
              image={movie.image}
              alt={movie.title}
            />
            {!isPreviewCard && (
              <CardMenu>
                <MenuItem onClick={() => onCardSelect(movie)}>
                  <FormattedMessage id='select' />
                </MenuItem>
                <MenuItem onClick={handleModal}>
                  <FormattedMessage id='details' />
                </MenuItem>
              </CardMenu>
            )}
          </Box>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
            }}
          >
            <Typography
              variant='h6'
              gutterBottom
              component='p'
              fontWeight={500}
            >
              {movie.title}
            </Typography>
            <Box>
              <Typography
                variant='string'
                gutterBottom
                component='p'
                color='gray'
              >
                {genres}
              </Typography>

              <Typography variant='string' component='p'>
                {movie.releaseDate}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <MovieDetailsModal
        open={open}
        handleClose={handleModal}
        movie={movie}
        genres={genres}
        onCardSelect={onCardSelect}
      />
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  onSelectClick: PropTypes.func,
  isPreviewCard: PropTypes.bool,
  genreFullList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
