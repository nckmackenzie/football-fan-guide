import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function BasicListItem({ icon, text, href }) {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a className="no-underline text-inherit">
        <ListItem button selected={pathname === href}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </a>
    </Link>
  );
}
