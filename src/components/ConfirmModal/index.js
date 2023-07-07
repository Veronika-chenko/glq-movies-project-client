import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Box,
  Typography,
  Modal,
  Paper,
  InputBase,
  IconButton,
  Divider,
  Alert,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

import { CONFIRM_TIMEOUT } from '../../const';
import { SocialShare } from '../SocialShare';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export const ConfirmModal = ({ title, url, open, onClose }) => {
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    let timer;

    if (openAlert) {
      timer = setTimeout(() => {
        setOpenAlert(false);
      }, CONFIRM_TIMEOUT);
    }
    return () => clearTimeout(timer);
  }, [openAlert]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <Paper
          component='form'
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            mt: 2,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder='list URL'
            inputProps={{ 'aria-label': 'list URL' }}
            value={url}
          />

          <IconButton
            href={url}
            target={'_blank'}
            sx={{ p: '10px' }}
            aria-label='preview'
          >
            <VisibilityIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
          <CopyToClipboard text={url} onCopy={() => setOpenAlert(true)}>
            <IconButton
              color='primary'
              sx={{ p: '10px' }}
              aria-label='copy to clipboard'
            >
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Paper>
        <Typography id='modal-modal-title' variant='h6' component='h3' mt={1}>
          <FormattedMessage id='share_with_friends' />
        </Typography>
        <SocialShare url={url} title={title} />
        {openAlert ? (
          <Alert
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize='inherit' />
              </IconButton>
            }
            sx={{
              mt: 2,
            }}
          >
            <FormattedMessage id='copied' />
          </Alert>
        ) : null}
      </Box>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
