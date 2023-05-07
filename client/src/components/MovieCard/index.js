import {
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Typography,
  styled,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { CardMenu } from '../CardMenu';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

export const MovieCard = ({ movie, onCardSelect }) => {
  // onCardSelect
  // const onSelectClick = (movie) => alert('movie is added');

  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <CardMenu>
        <MenuItem onClick={onCardSelect}>Select</MenuItem>
      </CardMenu>
      <CardMedia
        component='img'
        height='250'
        image={movie.image}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant='h5' gutterBottom component='div' fontWeight={500}>
          {movie.title}
        </Typography>
        <Typography variant='subtitle1' gutterBottom component='div'>
          {movie.releaseDate}
        </Typography>
      </CardContent>
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
};
