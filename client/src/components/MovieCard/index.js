import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { CardMenu } from './components/CardMenu';

export const MovieCard = () => {
  const onSelectClick = (movie) => alert('movie is added');

  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <CardMenu onSelectClick={onSelectClick} />
      <CardMedia
        component='img'
        height='250'
        image='https://www.themoviedb.org/t/p/w220_and_h330_face/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='h5' gutterBottom component='div' fontWeight={500}>
          Lizard Lizard
        </Typography>
        <Typography variant='subtitle1' gutterBottom component='div'>
          Apr 20, 2023
        </Typography>
      </CardContent>
    </Card>
  );
};
