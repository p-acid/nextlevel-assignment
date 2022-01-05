import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getUserData } from '../lib/user';

import Header from './Header';

const Layout: React.FC = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getUserData(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjU1MGVhYTVhNzZhMDJkNTdiZjVhMCIsImlhdCI6MTY0MTI4NTgzMiwiZXhwIjoxNjQxODkwNjMyfQ.Tdz9WHbAgapHsIvi7ksovY3V_iqaaiGUKHcrrPGgvZA',
    ).then(res => setUserName(res.data.username));
  }, []);

  return (
    <Wrapper>
      <Header>{userName}</Header>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;
