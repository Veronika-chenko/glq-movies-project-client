import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import { Navigation } from './components';
import { Home, Recommend, Settings } from './pages';

function App() {
  return (
    <BrowserRouter>
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
            <Route path='settings' element={<Settings />}></Route>
            <Route path='recommend' element={<Recommend />}></Route>
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
