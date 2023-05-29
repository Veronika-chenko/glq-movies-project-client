import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import { SORT_DIRECTION } from '../../../../const';

export const SortDirectionField = () => (
  <Field
    name='sortDirection'
    render={({ input }) => (
      <FormattedMessage id='filters.sort_direction'>
        {(placeholder) => (
          <FormControl>
            <FormLabel id='sort_direction'>{placeholder}</FormLabel>
            <RadioGroup row name='sort_directionp' {...input}>
              <FormControlLabel
                value={SORT_DIRECTION.ASC}
                control={<Radio />}
                label={
                  <FormattedMessage id='filters.sort_direction_options.asc'></FormattedMessage>
                }
              />
              <FormControlLabel
                value={SORT_DIRECTION.DESC}
                control={<Radio />}
                label={
                  <FormattedMessage id='filters.sort_direction_options.desc'></FormattedMessage>
                }
              />
            </RadioGroup>
          </FormControl>
        )}
      </FormattedMessage>
    )}
  />
);
