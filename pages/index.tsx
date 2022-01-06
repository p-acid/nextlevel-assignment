import type { NextPage } from 'next';
import { useState } from 'react';
import useSWR from 'swr';

import { getUserData } from '../lib/user';
import { getContentsList } from '../lib/content';
import { URI } from '../config';

import List from '../components/List';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import PageBtns from '../components/PageBtns/PageBtns';

const Home: NextPage = ({ userData }: any) => {
  const [currentStart, setCurrentStart] = useState(1);
  const { data, error } = useSWR(
    `${URI}/v1/contents?isActive=true&_start=${currentStart}&_limit=5&_sort=createdAt`,
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

export const getStaticProps = async () => {
  const userData = await getUserData(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjU1MGVhYTVhNzZhMDJkNTdiZjVhMCIsImlhdCI6MTY0MTI4NTgzMiwiZXhwIjoxNjQxODkwNjMyfQ.Tdz9WHbAgapHsIvi7ksovY3V_iqaaiGUKHcrrPGgvZA',
  );

  return { props: { userData: userData.data } };
};

export default Home;
