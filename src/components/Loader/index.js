import { Grid } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Grid
      position='absolute'
      top='0'
      bottom='0'
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
    </Grid>
  );
};
