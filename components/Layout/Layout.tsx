import React, { useEffect, useState } from 'react';

import { getUserData } from '../../lib/user';

import Header from '../Header/Header';
import { Wrapper, Main } from './LayoutStyle';

const Layout: React.FC = ({ children }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getUserData(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjU1MGVhYTVhNzZhMDJkNTdiZjVhMCIsImlhdCI6MTY0MTI4NTgzMiwiZXhwIjoxNjQxODkwNjMyfQ.Tdz9WHbAgapHsIvi7ksovY3V_iqaaiGUKHcrrPGgvZA',
    ).then(res => setUserName(res.data.username));
  }, []);

  return (
    <Wrapper>
      <Header>{userName}</Header>
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
