import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import BasicAlert from '../../components/ui/BasicAlert';
import Layout from '../../components/layout/Layout';

export default function index() {
  return (
    <>
      <Head>
        <title>Stats | Ultimate Fan Guide</title>
        <meta
          name="description"
          content="Stats for your favorite clubs for all competitions!"
        />
      </Head>
      <Layout>
        <Box>
          <BasicAlert type="warning" message="Coming soon" />
        </Box>
      </Layout>
    </>
  );
}
