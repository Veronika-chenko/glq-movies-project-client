import { useSearchParams, Link } from 'react-router-dom';
import { ApolloError, useQuery } from '@apollo/client';
import { MOVIES_BY_IDS_QUERY } from './queries';
import { FormattedMessage } from 'react-intl';
import { Grid, Box, Typography, Paper, styled } from '@mui/material';
import { MovieCard } from '../../components';

const Container = styled(Paper)(({ theme }) => ({
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '280px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '545px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
    width: '100%',
  },
}));

const ListName = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(3),
  },
}));

const Recommend = () => {
  let [searchParams] = useSearchParams();

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: {
      ids: searchParams
        .get('ids')
        .split(',')
        .map((id) => +id),
    },
  });

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    console.log('🚀 ~ error on Recommend page:', error);
    if (error instanceof ApolloError) {
      return (
        <Grid
          item
          xs={12}
          container
          flexDirection='column'
          justifyContent='center'
        >
          <Typography>The link provided is invalid.</Typography>
          <Link to='/'> Go Home</Link>
        </Grid>
      );
    }
  }

  return (
    <Box sx={{ flexGrow: 1, paddingTop: 2 }}>
      <Grid item xs={12} container justifyContent='center'>
        <Container>
          <ListName variant='h4' gutterBottom>
            <FormattedMessage id='recommendation_list_name' />:{' '}
            {searchParams.get('title')}
          </ListName>
          {data?.moviesByIds && (
            <Grid container spacing={2}>
              {data.moviesByIds.map((movie) => (
                <Grid
                  key={movie.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{ display: 'flex' }}
                >
                  <MovieCard movie={movie} isPrewievCard />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Grid>
    </Box>
  );
};

export default Recommend;
