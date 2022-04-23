import React from 'react';
import Link from 'next/link';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function BasicListItem({ icon, text, href }) {
  return (
    <Link href={href}>
      <a className="no-underline text-inherit">
        <ListItem button>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </a>
    </Link>
  );
}
