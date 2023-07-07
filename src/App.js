import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from,
} from '@apollo/client';
import { Box, Container, CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';

import { Navigation } from './components';
import { Home, NotFound, Recommend } from './pages';
import { API_URL } from './const';
import { AppContext, Provider as IntlProvider } from './context';

function App() {
  const { state } = useContext(AppContext);

  const httpLink = new HttpLink({
    uri: API_URL,
  });

  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty('headers')
      ? operation.getContext().headers
      : {};

    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale,
      },
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <IntlProvider locale={state.locale}>
      <ApolloProvider client={client}>
        <HelmetProvider>
          <CssBaseline />
          <Navigation />
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.grey[100],
            }}
          >
            <Container maxWidth='xl'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='recommend' element={<Recommend />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Container>
          </Box>
        </HelmetProvider>
      </ApolloProvider>
    </IntlProvider>
  );
}

export default App;
