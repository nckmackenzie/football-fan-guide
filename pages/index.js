import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Home() {
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
