import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import { LOCALES } from '../../const';

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
  <IntlProvider textComponent={Fragment} locale={locale}>
    {children}
  </IntlProvider>
);

Provider.displayName = 'IntlProvider';

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  locale: PropTypes.oneOf(Object.values(LOCALES)),
};

Provider.defaultProps = {
  locale: LOCALES.ENGLISH,
};

export default Provider;
