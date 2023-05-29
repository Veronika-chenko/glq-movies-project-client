import { TextField } from '@mui/material';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

export const YearField = () => (
  <Field
    name='year'
    render={({ input }) => (
      <TextField
        id='outlined-basic'
        label={<FormattedMessage id='filters.year' />}
        variant='outlined'
        type='number'
        minvalue={1800}
        maxvalue={2030}
        {...input}
      />
    )}
  />
);
