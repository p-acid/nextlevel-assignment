import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

import { getUserData } from '../../api/main';

import Header from '../Header/Header';
import { Wrapper, Main } from './LayoutStyle';

const Layout: React.FC = ({ children }) => {
  const [userName, setUserName] = useState('');
  const token = getCookie('token');

  useEffect(() => {
    getUserData(token).then(res => {
      setUserName(res.data.username);
    });
  }, [token]);

  return (
    <Wrapper>
      <Header>{userName}</Header>
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
