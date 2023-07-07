import { PropTypes } from 'prop-types';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import translate from '../../utils/translate';

export const SelectedMoviesForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validate={(values) => {
      const errors = {};

      if (!values.listName) {
        errors.listName = translate('required_field');
      }

      return errors;
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
          <Field name='listName'>
            {({ input, meta }) => (
              <FormattedMessage id='put_the_list_name'>
                {(placeholder) => (
                  <>
                    <InputBase
                      autoComplete='off'
                      sx={{ ml: 1, flex: 1 }}
                      placeholder={placeholder.join(' ')}
                      inputProps={{ 'aria-label': 'put list name' }}
                      {...input}
                    />
                    {meta.touched && meta.error && (
                      <span style={{ color: '#ff0000' }}>{meta.error}</span>
                    )}
                  </>
                )}
              </FormattedMessage>
            )}
          </Field>

          <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
          <IconButton
            color='primary'
            sx={{ p: '10px' }}
            aria-label='directions'
            type='submit'
          >
            <CheckIcon />
          </IconButton>
        </Paper>
      </form>
    )}
  />
);

SelectedMoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
