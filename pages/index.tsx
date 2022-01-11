import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';

import { getListData, getUserData } from '../api/main';

import List from '../components/List/List';
import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout/Layout';
import PageBtns from '../components/PageBtns/PageBtns';
import { Loading } from '../components/Loading/Loading';
import { AxiosResponse } from 'axios';

const LIST_INFO = {
  PRODUCTS_LIMIT: 5,
  TOTAL_PAGES: 20,
  PAGE_LIST_LIMIT: 5,
};

const Main: NextPage = ({ userData }: any) => {
  const [currentStart, setCurrentStart] = useState(0);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    getListData({ _limit: LIST_INFO.PRODUCTS_LIMIT, _sort: 'createdAt', isActive: true, _start: currentStart }).then(
      (res: AxiosResponse) => setContentList((): any => [...res.data]),
    );
  }, [currentStart]);

  return (
    <Layout>
      <Banner userData={userData} />
      {contentList.length > 0 ? <List contentList={contentList} /> : <Loading />}
      <PageBtns listInfo={LIST_INFO} currentStart={currentStart} setCurrentStart={setCurrentStart} />
    </Layout>
  );
};

export const getServerSideProps = async (props: any) => {
  const { req, res } = props;

  const cookie = getCookie('token', { req, res });

  const userData = await getUserData(cookie);

  return { props: { userData: userData.data } };
};

export default Main;
