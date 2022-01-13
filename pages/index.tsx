import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';

import { getListData, getUserData } from '../api/main';

import List from '../components/List/List';
import Banner from '../components/Banner/Banner';

import PageBtns from '../components/PageBtns/PageBtns';
import { Loading } from '../components/Loading/Loading';

const LIST_INFO = {
  PRODUCTS_LIMIT: 5,
  TOTAL_PAGES: 20,
  PAGE_LIST_LIMIT: 5,
};

const Main: NextPage = ({ userData }: any) => {
  const [currentStart, setCurrentStart] = useState(0);
  const [contentList, setContentList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (userData === null) {
      router.push('/sign-in');
    }
  }, [userData, router]);

  useEffect(() => {
    getListData({
      _limit: LIST_INFO.PRODUCTS_LIMIT,
      _sort: 'createdAt:desc',
      isActive: true,
      _start: currentStart,
    }).then((res: AxiosResponse) => setContentList((): any => [...res.data]));
  }, [currentStart]);

  return (
    <>
      {userData && (
        <>
          <Banner userData={userData} />
          {contentList.length > 0 ? <List contentList={contentList} /> : <Loading />}
          <PageBtns listInfo={LIST_INFO} currentStart={currentStart} setCurrentStart={setCurrentStart} />
        </>
      )}
    </>
  );
};

export const getServerSideProps = async (props: any) => {
  const { req, res } = props;

  const cookie = getCookie('token', { req, res });

  const userData = await getUserData(cookie);

  return { props: { userData: userData.data || null } };
};

export default Main;
