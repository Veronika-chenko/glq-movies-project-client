import { useState } from 'react';
import { IconButton, Menu } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

export const CardMenu = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{
          position: 'absolute',
          top: 4,
          right: 4,
          borderRadius: 50,
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
        }}
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        {children}
      </Menu>
    </>
  );
};
