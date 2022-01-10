import type { NextPage } from 'next';
import { useState } from 'react';
import { getCookie } from 'cookies-next';
import useSWR, { SWRResponse } from 'swr';
import axios from 'axios';

import { getUserData } from '../lib/user';
import { URI } from '../config';

import List from '../components/List/List';
import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout/Layout';
import PageBtns from '../components/PageBtns/PageBtns';

const LIST_INFO = {
  PRODUCTS_LIMIT: 5,
  TOTAL_PAGES: 20,
  PAGE_LIST_LIMIT: 5,
};

const Main: NextPage = ({ userData }: any) => {
  const [currentStart, setCurrentStart] = useState(0);
  const { data }: SWRResponse = useSWR(
    `${URI}/v1/contents?isActive=true&_start=${currentStart}&_limit=${LIST_INFO.PRODUCTS_LIMIT}&_sort=createdAt `,
    (url: string) => axios.get(url).then(res => res.data),
  );

  return (
    <Layout>
      <Banner userData={userData} />
      <List contentList={data} />
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
