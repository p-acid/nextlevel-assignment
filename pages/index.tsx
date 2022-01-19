import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { store } from '../redux/store';
import { getUserData } from '../api/main';
import { getList } from '../redux/actions/listActions';
import { LIST_INFO } from '../redux/constants/listConstants';

import List from '../components/List/List';
import Banner from '../components/Banner/Banner';
import PageBtns from '../components/PageBtns/PageBtns';
import { Loading } from '../components/Loading/Loading';

const Main: NextPage = ({ userData }: any) => {
  const { list, currentStart }: any = useSelector(state => state);

  const router = useRouter();

  useEffect(() => {
    if (userData === null) {
      router.push('/sign-in');
    }
  }, [userData, router]);

  useEffect(() => {
    store.dispatch(getList(store.getState().currentStart));
  }, [currentStart]);

  return (
    <>
      {userData && (
        <>
          <Banner userData={userData} />
          {list.length > 0 ? <List contentList={list} /> : <Loading />}
          <PageBtns listInfo={LIST_INFO} currentStart={currentStart} />
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
