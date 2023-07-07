import { ErrorCustom, SEO } from '../../components';

export const NotFound = () => {
  return (
    <>
      <SEO title='Not Found' />
      <ErrorCustom errorTextId='notFound.error_text' withHomeLink />
    </>
  );
};
