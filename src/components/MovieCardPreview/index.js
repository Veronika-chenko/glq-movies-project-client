import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { getGenreName } from './helpers';

import { Trailer } from '../Trailer';
import { SelectMovieButton } from '../SelectMovieButton';

export const MovieCardPreview = ({ movie }) => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const genres = getGenreName(movie.genres);

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
            <SelectMovieButton handleClick={handleModal}>
              <YouTubeIcon sx={{ fontSize: 80, color: 'rgba(255, 0, 0, 1)' }} />
            </SelectMovieButton>
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
      {open && (
        <Trailer movieId={movie.id} open={open} handleClose={handleModal} />
      )}
    </>
  );
};

MovieCardPreview.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
