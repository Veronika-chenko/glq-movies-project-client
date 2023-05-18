import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { MOVIES_BY_IDS_QUERY } from './queries';

import { Grid, Typography } from '@mui/material';
import { MovieCard } from '../../components';

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
    return 'Error';
  }

  return (
    <>
      <Typography variant='h1' gutterBottom>
        {searchParams.get('title')}
      </Typography>
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
    </>
  );
};

export default Recommend;
