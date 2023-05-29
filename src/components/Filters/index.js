import { Box } from '@mui/material';
import { useQuery } from '@apollo/client';
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

import { GENRES_QUERY } from './queries';

export const Filters = ({ onSubmit, initialValues }) => {
  // console.log('🚀 ~ initialValues:', initialValues);
  const { loading, data } = useQuery(GENRES_QUERY);

  if (loading) {
    return 'Loading ...';
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {/* left filter block */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            {/* right filter block  */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box mr={3}>
                <SortField />
              </Box>

              <SortDirectionField />
            </Box>
          </Box>
          {/* submit button: */}
          <Box>
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
