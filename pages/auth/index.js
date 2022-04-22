import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import BasicAuth from '../../components/auth/BasicAuth';
import { useRouter } from 'next/router';
export default function LoginRegister() {
  const {
    query: { type },
  } = useRouter();
  const [authType, setAuthType] = React.useState();
  React.useEffect(() => {
    setAuthType(type);
  }, [type]);
  return (
    <>
      <Head>
        <title>{`${
          authType === 'login' ? 'Login' : 'Register'
        } | Fan Guide`}</title>
      </Head>
      <div
        className={`${styles.bg} px-2 md:px-0 w-full h-screen flex items-center justify-center`}
      >
        <BasicAuth type={type} />
      </div>
    </>
  );
}
