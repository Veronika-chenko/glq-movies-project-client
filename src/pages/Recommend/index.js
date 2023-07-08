import { useSearchParams } from 'react-router-dom';
import { ApolloError, useQuery } from '@apollo/client';
import { MOVIES_BY_IDS_QUERY } from './queries';
import { FormattedMessage } from 'react-intl';
import { Grid, Box, Typography, Paper, styled } from '@mui/material';
import { ErrorCustom, Loader, MovieCardPreview, SEO } from '../../components';

const Container = styled(Paper)(({ theme }) => ({
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '480px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '545px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
    width: '100%',
    padding: '32px',
  },
}));

const ListName = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(3),
  },
}));

export const Recommend = () => {
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
    return <Loader />;
  }

  if (error) {
    console.log('🚀 ~ error on Recommend page:', error);
    if (error instanceof ApolloError) {
      return <ErrorCustom errorTextId='invalid_link' withHomeLink />;
    }
  }

  return (
    <>
      <SEO title='Recommend' />
      <Box sx={{ flexGrow: 1 }} py={2}>
        <Grid item xs={12} container justifyContent='center'>
          <Container>
            <ListName variant='h4' gutterBottom>
              <FormattedMessage id='recommendation_list_name' />:{' '}
              {searchParams.get('title')}
            </ListName>
            {data?.moviesByIds && (
              <Grid container spacing={4}>
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
                    <MovieCardPreview movie={movie} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </Grid>
      </Box>
    </>
  );
};
