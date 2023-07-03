import { PropTypes } from 'prop-types';
import { Box, styled } from '@mui/material';

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  opacity: 0,
  background: 'rgba(255, 255, 255, .7)',
  transition: 'opacity 250ms linear',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  },
}));

export const DeleteMovieButton = ({ handleClick, children }) => {
  return <IconWrapper onClick={handleClick}>{children}</IconWrapper>;
};

DeleteMovieButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
