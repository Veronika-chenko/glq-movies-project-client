import { TextField } from '@mui/material';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

export const YearField = () => {
  return (
    <Field
      name='year'
      render={({ input }) => (
        <TextField
          id='outlined-basic'
          label={<FormattedMessage id='filters.year' />}
          variant='outlined'
          type='number'
          size='small'
          minvalue={1800}
          maxvalue={2030}
          {...input}
        />
      )}
    />
  );
};
