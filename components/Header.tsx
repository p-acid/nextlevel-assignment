import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Header: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Image src="/images/symbol_logo.png" alt="symbol_logo" width={24} height={26} />
      {children}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div``;
