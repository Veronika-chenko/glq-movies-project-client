import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import { SORT_OPTIONS } from '../../../../const';

export const SortField = () => (
  <Field
    name='sortBy'
    render={({ input }) => (
      <FormattedMessage id='filters.sort_by'>
        {(placeholder) => (
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id='demo-simple-select-label'>{placeholder}</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              autoWidth
              label={placeholder}
              {...input}
            >
              {SORT_OPTIONS.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  <FormattedMessage
                    id={`filters.sort.${label}`}
                  ></FormattedMessage>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </FormattedMessage>
    )}
  />
);
