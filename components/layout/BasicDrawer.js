import React from 'react';
import { Box, Drawer, Toolbar, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { drawerNav } from '../../data/data';
import BasicListItem from './BasicListItem';

export default function BasicDrawer({
  window,
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}) {
  const drawer = (
    <div>
      <Toolbar sx={{ bgcolor: 'primary.main', color: '#fff' }}>
        <Typography variant="subtitle1" noWrap component="div">
          The Ultimate Fan Guide
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {drawerNav?.map(item => (
          <BasicListItem key={item.text} {...item} />
          // <ListItem button key={item.text}>
          //   <ListItemIcon>{item.icon}</ListItemIcon>
          //   <ListItemText primary={item.text} />
          // </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
