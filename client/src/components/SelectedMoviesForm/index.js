import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

export const SelectedMoviesForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validate={(values) => {
      const errors = {};

      if (!values.listName) {
        errors.listName = 'Required';
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
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={placeholder}
                    inputProps={{ 'aria-label': 'put list name' }}
                    {...input}
                  />
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
