import { useQuery } from '@apollo/client';
import { CardMedia, Modal, Paper, styled } from '@mui/material';
import { PropTypes } from 'prop-types';
import { TRAILER_QUERY } from '../../pages/Home/queries';
import { Loader } from '../Loader';

const ModalBox = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: '100%',
  height: 'auto',

  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,

  [theme.breakpoints.up('sm')]: {
    maxWidth: 520,
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 820,
  },
}));

const MovieContailer = styled(CardMedia)(({ theme }) => ({
  height: 240,
  [theme.breakpoints.up('sm')]: {
    width: 520,
    height: 315,
  },
  [theme.breakpoints.up('md')]: {
    width: 820,
    height: 498,
  },
}));

export const Trailer = ({ movieId, open, handleClose }) => {
  const { loading, error, data } = useQuery(TRAILER_QUERY, {
    variables: { id: +movieId },
  });

  if (error) {
    console.log('🚀 ~ Trailer error:', error);
  }

  return (
    <>
      <Modal
        sx={{ margin: '0 16px' }}
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <>
          {loading && <Loader />}
          {data && (
            <ModalBox>
              <MovieContailer
                component='iframe'
                src={`https://www.youtube.com/embed/${data?.trailer?.key}`}
              />
            </ModalBox>
          )}
        </>
      </Modal>
    </>
  );
};

Trailer.propTypes = {
  movieId: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
