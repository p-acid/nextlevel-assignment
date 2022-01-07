import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { removeCookies } from 'cookies-next';
import { useRouter } from 'next/router';

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

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  padding: 1rem 2.5rem;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  padding-left: 1rem;
  font-weight: bold;
  font-size: 21px;
  line-height: 132%;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.pr.dark};
`;

const LogoutBtn = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.pr.dark};
  border-radius: 64px;
  color: ${({ theme }) => theme.pr.dark};
  background-color: white;
  cursor: pointer;
`;
