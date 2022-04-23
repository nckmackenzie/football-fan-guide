import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import AuthContext from '../context/Auth/auth-context';

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
      <Layout />
      {/* <main>
        <h1 className="text-3xl font-bold underline">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main> */}
    </div>
  );
}
