import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { blue } from '@mui/material/colors';

export default function SmallCard({ src, width, height, title, name }) {
  const accent = blue[900];
  return (
    <Card sx={{ height: '6rem' }}>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Image src={src} alt={name} width={width} height={height} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" component="h2">
              {title}
            </Typography>
            <Typography variant="h6" component="h4" sx={{ color: accent }}>
              {name}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
