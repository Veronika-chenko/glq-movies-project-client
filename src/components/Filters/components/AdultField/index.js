import { Checkbox, FormControlLabel } from '@mui/material';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

export const AdultField = () => (
  <Field
    name='includeAdult'
    type='checkbox'
    render={({ input }) => (
      <FormControlLabel
        control={<Checkbox {...input} />}
        label={<FormattedMessage id='filters.include_adult' />}
      />
    )}
  />
);
