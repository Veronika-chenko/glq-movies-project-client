import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import translate from '../../utils/translate';

import {
  Box,
  styled,
  Button,
  Typography,
  Modal,
  CardMedia,
  Paper,
  Grid,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { SelectMovieButton } from '../SelectMovieButton';
import { Trailer } from '../Trailer';

const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  maxHeight: '90vh',
  overflowY: 'auto',
  borderRadius: 4,
  boxShadow: 24,
  width: '100%',
  maxWidth: '400px',

  [theme.breakpoints.up('md')]: {
    maxWidth: '700px',
    maxHeight: '80vh',
  },
}));

const ContentBox = styled(Paper)(({ theme }) => ({
  bgcolor: 'background.paper',
  padding: '32px 16px',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    gap: 32,
    padding: '40px 36px',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  minWidth: '32px',
  height: '32px',
  padding: 1,

  [theme.breakpoints.up('md')]: {
    top: 5,
    right: 5,
    minWidth: 40,
    height: 40,
  },
}));

const ImageWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  marginBottom: '16px',
  height: 'fit-content',
  borderRadius: 4,
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    maxWidth: '264px',
    marginBottom: 0,
  },
}));

const TextField = ({ title, text }) => {
  return (
    <Grid container gap={2}>
      <Typography color='gray' gutterBottom>
        {title}:
      </Typography>
      <Typography variant='span' fontWeight={500} color='rgba(0, 0, 0, .9)'>
        {text}
      </Typography>
    </Grid>
  );
};

export const MovieDetailsModal = ({
  open,
  handleClose,
  movie,
  genres,
  onCardSelect,
}) => {
  const { id, title, image, releaseDate, popularity, overview } = movie;
  const [trailerOpen, setTrailerOpen] = useState(false);

  const handleTrailerModal = () => {
    setTrailerOpen(!trailerOpen);
  };

  const selectCardAndCloseModal = () => {
    onCardSelect(movie);
    handleClose();
  };

  return (
    <>
      <Modal
        sx={{ margin: '0 16px' }}
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <ModalBox>
          <ContentBox>
            <CloseButton onClick={handleClose}>
              <CloseIcon color='black' />
            </CloseButton>
            <ImageWrap>
              <CardMedia
                sx={{ width: '100%' }}
                component='img'
                height='auto'
                image={image}
                alt={title}
              />
              <SelectMovieButton handleClick={handleTrailerModal}>
                <YouTubeIcon
                  sx={{ fontSize: 80, color: 'rgba(255, 0, 0, 1)' }}
                />
              </SelectMovieButton>
            </ImageWrap>
            <Grid
              container
              rowGap={1}
              direction='column'
              justifyContent='space-between'
            >
              <Box>
                <Typography
                  variant='h6'
                  component='h2'
                  gutterBottom
                  color='rgba(0, 0, 0, .9)'
                >
                  {title}
                </Typography>
                <TextField
                  title={translate('modal.popularity')}
                  text={popularity}
                />
                <TextField
                  title={translate('modal.release_date')}
                  text={releaseDate}
                />
                <TextField title={translate('modal.genres')} text={genres} />
                {/*  */}
                <Typography color='gray' gutterBottom>
                  <FormattedMessage id='modal.overview' />:
                </Typography>
                <Typography
                  variant='span'
                  fontWeight={500}
                  color='rgba(0, 0, 0, .9)'
                >
                  {overview}
                </Typography>
              </Box>
              <Button
                variant='contained'
                onClick={selectCardAndCloseModal}
                sx={{ display: 'block', marginLeft: 'auto' }}
              >
                <FormattedMessage id='select' />
              </Button>
            </Grid>
          </ContentBox>
        </ModalBox>
      </Modal>
      {trailerOpen && (
        <Trailer
          movieId={id}
          open={trailerOpen}
          handleClose={handleTrailerModal}
        />
      )}
    </>
  );
};

MovieDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
  genres: PropTypes.string.isRequired,
  onCardSelect: PropTypes.func.isRequired,
};
