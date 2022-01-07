import type { NextPage } from 'next';
import { useState } from 'react';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

import { getUserData } from '../lib/user';
import { getContentsList } from '../lib/content';
import { URI } from '../config';

import List from '../components/List/List';
import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout/Layout';
import PageBtns from '../components/PageBtns/PageBtns';

const Main: NextPage = ({ userData }: any) => {
  const [currentStart, setCurrentStart] = useState(1);
  const { data, error } = useSWR(
    `${URI}/v1/contents?isActive=true&_start=${currentStart}&_limit=5&_sort=createdAt `,
    getContentsList,
  );

  return (
    <Layout>
      <Banner userData={userData} />
      <List contentList={data} />
      <PageBtns nextStart={data?.nextStart} totalPages={3} setCurrentStart={setCurrentStart} />
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
