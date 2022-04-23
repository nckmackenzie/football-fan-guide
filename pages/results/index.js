import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import BasicAlert from '../../components/ui/BasicAlert';
import Layout from '../../components/layout/Layout';

export default function index() {
  return (
    <>
      <Head>
        <title>Results | Ultimate Fan Guide</title>
        <meta
          name="description"
          content="All results for all major competitions all over the world"
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
