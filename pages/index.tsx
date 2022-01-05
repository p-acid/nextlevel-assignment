import type { NextPage } from 'next';
import Banner from '../components/Banner';

import Layout from '../components/Layout';

import { getUserData } from '../lib/user';
import { getContentsList } from '../lib/content';
import List from '../components/List';

const Home: NextPage = ({ userData, contentsList }: any) => {
  return (
    <Layout>
      <Banner userData={userData} />
      <List contentList={contentsList} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const userData = await getUserData(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjU1MGVhYTVhNzZhMDJkNTdiZjVhMCIsImlhdCI6MTY0MTI4NTgzMiwiZXhwIjoxNjQxODkwNjMyfQ.Tdz9WHbAgapHsIvi7ksovY3V_iqaaiGUKHcrrPGgvZA',
  );

  const contentsList = await getContentsList();

  return { props: { userData: userData.data, contentsList: contentsList } };
};

export default Home;
