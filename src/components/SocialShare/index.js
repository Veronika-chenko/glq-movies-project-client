import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { SOCIAL_BUTTON_SIZE } from '../../const';

export const SocialShare = ({ url, title }) => {
  return (
    <Stack direction='row' spacing={1} mt={1}>
      <FacebookShareButton url={url}>
        <FacebookIcon round size={SOCIAL_BUTTON_SIZE} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={SOCIAL_BUTTON_SIZE} round />
      </TwitterShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={SOCIAL_BUTTON_SIZE} round />
      </TelegramShareButton>
    </Stack>
  );
};

SocialShare.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default SocialShare;
