import React from 'react';
import { styled } from '@mui/material/styles';

export default function ButtonLikeDiv({
  info,
  fullWidth,
  align,
  disablePadding,
}) {
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
    padding: disablePadding ? 0 : theme.spacing(1),
    width: fullWidth && '100%',
    textAlign: align && align,
  }));
  return <Div>{info}</Div>;
}
