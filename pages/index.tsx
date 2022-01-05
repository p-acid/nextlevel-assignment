import type { NextPage } from 'next';

import Layout from '../components/Layout';

import { getUserData } from '../lib/user';

const Home: NextPage = ({ userData }: any) => {
  const { banner, profile, username, introduction, receiveOnly, interest, view, content, carrerFirst, carrerSecond } =
    userData;

  console.log(userData);

  return <Layout></Layout>;
};

export const getStaticProps = async () => {
  const res = await getUserData(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjU1MGVhYTVhNzZhMDJkNTdiZjVhMCIsImlhdCI6MTY0MTI4NTgzMiwiZXhwIjoxNjQxODkwNjMyfQ.Tdz9WHbAgapHsIvi7ksovY3V_iqaaiGUKHcrrPGgvZA',
  );

  return { props: { userData: res.data } };
};

export default Home;
