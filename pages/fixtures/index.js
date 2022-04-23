import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import BasicAlert from '../../components/ui/BasicAlert';

export default function index() {
  return (
    <>
      <Head>
        <title>Fixtures | Ultimate Fan Guide</title>
        <meta
          name="description"
          content="All upcoming fixtures for all competitions!"
        />
      </Head>
      <Box>
        <BasicAlert type="warning" message="Coming soon" />
      </Box>
    </>
  );
}
