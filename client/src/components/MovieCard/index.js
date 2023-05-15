import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { SelectMovieButton } from '../SelectMovieButton';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

export const MovieCard = ({ movie, onCardSelect }) => {
  return (
    <Card sx={{ position: 'relative', maxWidth: 250, width: '100%' }}>
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
            height='250'
            image={movie.image}
            alt={movie.title}
          />
          <SelectMovieButton handleClick={() => onCardSelect(movie)}>
            <AddBoxOutlinedIcon sx={{ fontSize: 80 }} />
            <Typography variant='h6' gutterBottom component='div'>
              Add to selected
            </Typography>
          </SelectMovieButton>
        </Box>
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
