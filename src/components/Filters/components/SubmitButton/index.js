import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export const SubmitButton = () => (
  <Button variant='contained' type='submit' size='large'>
    <FormattedMessage id='filters.submit' />
  </Button>
);
