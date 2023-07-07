import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title }) => {
  if (!title) return;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};
