import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import { getUserData } from '../api/main';

import List from '../components/List/List';
import Banner from '../components/Banner/Banner';
import PageBtns from '../components/PageBtns/PageBtns';

const Main: NextPage = ({ userData }: any) => {
  const router = useRouter();

  useEffect(() => {
    if (userData === null) {
      router.push('/sign-in');
    }
  }, [userData, router]);

  return (
    <>
      {userData && (
        <>
          <Banner userData={userData} />
          <List />
          <PageBtns />
        </>
      )}
    </>
  );
};

export const getServerSideProps = async ({ req, res }: any) => {
  const cookie = getCookie('token', { req, res });

  const userData = await getUserData(cookie);

  return { props: { userData: userData.data || null } };
};

export default Main;
