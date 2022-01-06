import React from 'react';
import { BtnBox, NextBtn, NumBtn } from './PageBtnsStyle';

interface PageBtnsI {
  totalPages: number;
}

const PageBtns: React.FC<PageBtnsI> = ({ totalPages }) => {
  return (
    <BtnBox>
      <NextBtn xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
        <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="black" />
      </NextBtn>
      <span>
        {new Array(totalPages).fill(0).map((item, idx) => (
          <NumBtn key={idx}>{idx + 1}</NumBtn>
        ))}
      </span>
      <NextBtn xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
        <path d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z" fill="black" />
      </NextBtn>
    </BtnBox>
  );
};

export default PageBtns;
