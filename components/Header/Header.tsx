import React from 'react';
import Image from 'next/image';
import { removeCookies } from 'cookies-next';
import { useRouter } from 'next/router';

import { Wrapper, SubWrapper, Title, LogoutBtn } from './HeaderStyle';

const Header: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <SubWrapper>
        <Image src="/images/symbol_logo.png" alt="symbol_logo" width={24} height={26} />
        <Title>{children}</Title>
      </SubWrapper>
      <LogoutBtn
        onClick={() => {
          removeCookies('token');
          router.push('/sign-in');
        }}
      >
        로그아웃
      </LogoutBtn>
    </Wrapper>
  );
};

export default Header;
