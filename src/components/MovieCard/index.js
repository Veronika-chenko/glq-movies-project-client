import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import { SelectMovieButton } from '../SelectMovieButton';

export const MovieCard = ({
  movie,
  onCardSelect,
  isPreviewCard,
  genreFullList,
}) => {
  // console.log('🚀 ~ genreFullList:', genreFullList);

  const replaceGenresIdsWithNames = () => {
    return movie?.genres
      .map((genreId) =>
        genreFullList?.find((genreObj) => genreObj.id === genreId)
      )
      .filter((genre) => genre)
      .slice(0, 3)
      .map((genre) => genre.name)
      .join(', ');
  };

  const getGenreName = () => {
    return movie?.genres
      .map((genre) => genre.name)
      .slice(0, 3)
      .join(', ');
  };

  return (
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
            <SelectMovieButton handleClick={() => onCardSelect(movie)}>
              <AddBoxOutlinedIcon sx={{ fontSize: 80 }} />
              <Typography variant='h6' gutterBottom component='div'>
                <FormattedMessage id='select' />
              </Typography>
            </SelectMovieButton>
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
          <Typography variant='h6' gutterBottom component='p' fontWeight={500}>
            {movie.title}
          </Typography>
          <Box>
            {genreFullList && (
              <Typography
                variant='string'
                gutterBottom
                component='p'
                color='gray'
              >
                {replaceGenresIdsWithNames()}
              </Typography>
            )}
            {!genreFullList && (
              <Typography
                variant='string'
                gutterBottom
                component='p'
                color='gray'
              >
                {getGenreName()}
              </Typography>
            )}

            <Typography variant='string' component='p'>
              {movie.releaseDate}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
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
