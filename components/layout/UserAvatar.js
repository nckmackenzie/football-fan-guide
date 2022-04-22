import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useRouter } from 'next/router';
// import BasicSnackBar from '../ui/BasicSnackBar';

export default function UserAvatar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();
  const settings = ['Profile', 'Logout'];
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleMenuItemClick = async e => {
    if (e.target.innerText === 'Logout') {
      const auth = getAuth();
      try {
        await signOut(auth);
        router.replace('/');
      } catch (error) {
        console.log(error.message);
      }
    } else {
      //   console.log('first');
      //   setOpen(true);
      //   <BasicSnackBar open={open} setOpen={setOpen} />;
    }
    setAnchorElUser(null);
  };
  return (
    <Box className="ml-auto">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(setting => (
          <MenuItem key={setting} onClick={handleMenuItemClick}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
