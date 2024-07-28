import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer({ open, toggleDrawer }) {
  const navigate = useNavigate();

  const handleListItemClick = (page) => {
    navigate(page);
    toggleDrawer();
  };

  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <Box
        className="w-72 bg-black text-white p-4"
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

            .courier-prime-regular {
              font-family: 'Courier Prime', monospace;
              font-weight: 400;
              font-style: normal;
            }

            .courier-prime-bold {
              font-family: 'Courier Prime', monospace;
              font-weight: 700;
              font-style: normal;
            }
          `}
        </style>
        <List className="courier-prime-bold">
          <ListItem key="List1" disablePadding>
            <ListItemButton onClick={() => handleListItemClick('/page1')}>
              <ListItemIcon>
                <InboxIcon sx={{ color: '#C9DAE6' }} />
              </ListItemIcon>
              <ListItemText primary="Switch List" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="List2" disablePadding>
            <ListItemButton onClick={() => handleListItemClick('/page2')}>
              <ListItemIcon>
                <InboxIcon sx={{ color: '#C9DAE6' }} />
              </ListItemIcon>
              <ListItemText primary="Ring List" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="List3" disablePadding>
            <ListItemButton onClick={() => handleListItemClick('/page3')}>
              <ListItemIcon>
                <InboxIcon sx={{ color: '#C9DAE6' }} />
              </ListItemIcon>
              <ListItemText primary="Item Inspection" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
