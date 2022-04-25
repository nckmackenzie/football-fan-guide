import React from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SetClubForm from './SetClubForm';

export default function Myclub() {
  return (
    <Box className="flex justify-center">
      <Card className="w-full lg:w-1/2">
        <CardContent>
          <SetClubForm />
        </CardContent>
      </Card>
    </Box>
  );
}
