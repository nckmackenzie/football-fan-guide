import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import Myclub from '../../components/set-club/Myclub';

export default function SetClub() {
  return (
    <>
      <Head>
        <title>Choose Club | Fan Guide</title>
      </Head>
      <Layout>
        <Myclub />
      </Layout>
    </>
  );
}
