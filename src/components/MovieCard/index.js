import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import { SelectMovieButton } from '../SelectMovieButton';

export const MovieCard = ({ movie, onCardSelect, isPrewievCard }) => {
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
          {!isPrewievCard && (
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
          <Typography
            variant='h6'
            gutterBottom
            component='div'
            fontWeight={500}
          >
            {movie.title}
          </Typography>
          <Typography variant='subtitle1' gutterBottom component='div'>
            {movie.releaseDate}
          </Typography>
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
  isPrewievCard: PropTypes.bool,
};
