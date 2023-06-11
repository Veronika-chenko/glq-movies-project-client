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

import { Navigation } from './components';
import { Home, Recommend } from './pages';
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
        <CssBaseline />
        <Navigation />
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
          }}
        >
          <Container maxWidth='xl'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='recommend' element={<Recommend />}></Route>
            </Routes>
          </Container>
        </Box>
      </ApolloProvider>
    </IntlProvider>
  );
}

export default App;
