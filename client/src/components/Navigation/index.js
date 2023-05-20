import { useState, useContext, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Hidden,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppContext } from '../../context/appContext';
import { LOCALES } from '../../const';

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale) => {
    dispatch({
      type: 'setLocale',
      locale,
    });
  }, []);

  const list = () => (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        <Link component={RouterLink} to='settings'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Hidden only={['lg', 'xl']}>
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link to='/' component={RouterLink} sx={{ flexGrow: 1 }}>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, color: 'white' }}
            >
              Movies recommendation
            </Typography>
          </Link>
          <Box>
            {state.locale}
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

          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button
              component={RouterLink}
              to='settings'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Settings
            </Button>
          </Box>
          {/* <Button color='inherit'>Login</Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};
