import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import BasicAlert from '../../components/ui/BasicAlert';

export default function index() {
  return (
    <>
      <Head>
        <title>Players | Ultimate Fan Guide</title>
        <meta
          name="description"
          content="Player information and data all in one place!"
        />
      </Head>
      <Box>
        <BasicAlert type="warning" message="Coming soon" />
      </Box>
    </>
  );
}
