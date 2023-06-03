import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

export const GenreField = ({ data }) => {
  // console.log('🚀 GenreField ~ data:', data);
  return (
    <Field
      name='genre'
      render={({ input }) => (
        <FormattedMessage id='filters.genre'>
          {(placeholder) => (
            <FormControl sx={{ minWidth: 120 }} md={{ m: 1 }}>
              <InputLabel id='demo-simple-select-label' size='small'>
                {placeholder}
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                autoWidth
                label={placeholder}
                size='small'
                {...input}
              >
                {data.genres.map(({ name, id }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </FormattedMessage>
      )}
    />
  );
};
