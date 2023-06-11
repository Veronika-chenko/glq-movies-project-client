import { useContext, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography, Link } from '@mui/material';
import { AppContext } from '../../context/appContext';
import { LOCALES } from '../../const';
import { FormattedMessage } from 'react-intl';

export const Navigation = () => {
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback(
    (locale) => {
      dispatch({
        type: 'setLocale',
        locale,
      });
    },
    [dispatch]
  );

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/' component={RouterLink} sx={{ flexGrow: 1 }}>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, color: 'white' }}
            >
              <FormattedMessage id='navigation.home' />
            </Typography>
          </Link>
          <Box>
            {state.locale}
            {/*  */}
            <Button
              disabled={state.locale === LOCALES.ENGLISH}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
              sx={{ my: 2, color: 'white' }}
            >
              EN
            </Button>
            <Button
              disabled={state.locale === LOCALES.UKRAINIAN}
              onClick={() => setLanguage(LOCALES.UKRAINIAN)}
              sx={{ my: 2, color: 'white' }}
            >
              UK
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
