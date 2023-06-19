import { Box, Divider, Hidden, styled } from '@mui/material';
import { Form } from 'react-final-form';
import { PropTypes } from 'prop-types';

import {
  AdultField,
  GenreField,
  ReleaseYearField,
  SortDirectionField,
  SortField,
  SubmitButton,
  YearField,
} from './components';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const SortContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    alignItems: 'flex-start',
  },
}));

export const Filters = ({ onSubmit, initialValues, genres: data }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Container>
            {/* left filter block */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <Box mr={3}>
                <YearField />
              </Box>

              <Box mr={3}>
                <ReleaseYearField />
              </Box>

              <Box mr={3}>
                <GenreField data={data} />
              </Box>

              <AdultField />
            </Box>
            <Hidden only={['md', 'lg', 'xl']}>
              <Divider sx={{ height: 1, m: 0.5 }} orientation='horizontal' />
            </Hidden>
            {/* right filter block  */}
            <SortContainer>
              <Box mr={3}>
                <SortField />
              </Box>
              <SortDirectionField />
            </SortContainer>
          </Container>
          {/* submit button: */}
          <Box sx={{ marginTop: '6px' }}>
            <SubmitButton />
          </Box>
        </form>
      )}
    />
  );
};

Filters.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
