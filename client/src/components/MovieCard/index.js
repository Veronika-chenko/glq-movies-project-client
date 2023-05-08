import {
  Box,
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
    <Card sx={{ position: 'relative', maxWidth: 250, width: '100%' }}>
      <CardMenu>
        <MenuItem onClick={onCardSelect}>Select</MenuItem>
      </CardMenu>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardMedia
          component='img'
          height='250'
          image={movie.image}
          alt={movie.title}
        />
        <CardInfo
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
        </CardInfo>
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
};
