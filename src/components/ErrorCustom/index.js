import { Link as RouterLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Typography, Link, Grid, Paper, styled } from '@mui/material';
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

export const ErrorCustom = ({ errorTextId, withHomeLink }) => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{ height: 'calc(100vh - 72px)' }}
    >
      <ContentContainer>
        <Typography variant='h6' component='h2'>
          <FormattedMessage id={errorTextId} />
        </Typography>
        {withHomeLink && (
          <Link to='/' component={RouterLink}>
            <Typography variant='h6' component='span'>
              <FormattedMessage id='notFound.home_link' />
            </Typography>
          </Link>
        )}
      </ContentContainer>
    </Grid>
  );
};

ErrorCustom.propTypes = {
  errorTextId: PropTypes.string.isRequired,
  withHomeLink: PropTypes.bool,
};
