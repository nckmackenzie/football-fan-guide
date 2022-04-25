import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AuthContext from '../context/Auth/auth-context';
import Layout from '../components/layout/Layout';
import Dashboard from '../components/dashboard/Dashboard';

export default function Home() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace('/auth?type=login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Head>
        <title>Home | Ultimate Fan Guide</title>
        <meta
          name="description"
          content="Get all stats for your favorite football clubs in one place!"
        />
      </Head>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}
