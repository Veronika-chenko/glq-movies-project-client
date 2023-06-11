import { createPortal } from 'react-dom';
import { Grid } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

const modalRoot = document.querySelector('#modal-root');

export const Loader = () => {
  return createPortal(
    <Grid
      position='fixed'
      top='0'
      bottom='0'
      left='0'
      right='0'
      container
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
    >
      <ThreeDots
        height='100'
        width='100'
        color='#1976d2'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='three-dots-loading'
      />
    </Grid>,
    modalRoot
  );
};
