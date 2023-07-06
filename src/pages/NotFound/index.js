import { Link as RouterLink } from 'react-router-dom';
import { Paper, Grid, Typography, Link, styled } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const ContentContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '90%',
  padding: 32,
  [theme.breakpoints.up('sm')]: {
    width: '70%',
    height: '50%',
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));

export const NotFound = () => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{ height: 'calc(100vh - 72px)' }}
    >
      <ContentContainer>
        <Typography variant='h6' component='h2'>
          <FormattedMessage id='notFound.errorText' />
        </Typography>
        <Link to='/' component={RouterLink}>
          <Typography variant='h6' component='span'>
            <FormattedMessage id='notFound.homeLink' />
          </Typography>
        </Link>
      </ContentContainer>
    </Grid>
  );
};
