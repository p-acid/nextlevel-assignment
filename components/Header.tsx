import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Header: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Image src="/images/symbol_logo.png" alt="symbol_logo" width={24} height={26} />
      <Title>{children}</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  padding: 1rem 2.5rem;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const Title = styled.span`
  padding-left: 1rem;
  font-weight: bold;
  font-size: 21px;
  line-height: 132%;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.pr.dark};
`;
