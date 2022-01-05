import type { NextPage } from 'next';
import { getUserData } from '../lib/user';

const Home: NextPage = () => {
  return <div>Hello, World</div>;
};

Home.getInitialProps = async () => {
  const res = getUserData();
};

export default Home;
