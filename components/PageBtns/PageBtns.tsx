import React from 'react';
import { StateUpdateCallback } from 'swr/dist/types';
import { BtnBox, NextBtn, NumBtnBox, NumBtn } from './PageBtnsStyle';

interface PageBtnsI {
  totalPages: number;
  nextStart: number;
  currentStart: number;
  setCurrentStart: StateUpdateCallback;
}

const PageBtns: React.FC<PageBtnsI> = ({ totalPages, nextStart, currentStart, setCurrentStart }) => {
  const currentPage = currentStart / 5 + 1;
  const leftPages = totalPages - currentPage;

  return (
    <BtnBox>
      {nextStart > 6 && (
        <NextBtn
          onClick={() => setCurrentStart((prev: number) => nextStart - 10)}
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
        >
          <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="black" />
        </NextBtn>
      )}
      <NumBtnBox>
        {leftPages <= 4
          ? Array(5)
              .fill(totalPages - 5)
              .map((item, idx) => {
                return (
                  <NumBtn
                    key={idx}
                    isCurrentPage={currentPage === item + idx + 1}
                    onClick={() => setCurrentStart((item + idx) * 5)}
                  >
                    {item + idx + 1}
                  </NumBtn>
                );
              })
          : [...Array(3).fill(Math.floor((currentPage - 1) / 3) * 3), '*', ...Array(3).fill(totalPages - 7)].map(
              (item, idx) => {
                return typeof item === 'number' ? (
                  <NumBtn
                    key={idx}
                    isCurrentPage={currentPage === item + idx + 1}
                    onClick={() => setCurrentStart((item + idx) * 5)}
                  >
                    {item + idx + 1}
                  </NumBtn>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="3" viewBox="0 0 16 3" fill="none">
                    <path
                      d="M1.87206 2.568C2.38806 2.568 2.79606 2.148 2.79606 1.596C2.79606 1.032 2.38806 0.624 1.87206 0.624C1.35606 0.624 0.948063 1.032 0.948063 1.596C0.948063 2.148 1.35606 2.568 1.87206 2.568ZM8.46269 2.568C8.97869 2.568 9.38669 2.148 9.38669 1.596C9.38669 1.032 8.97869 0.624 8.46269 0.624C7.94669 0.624 7.53869 1.032 7.53869 1.596C7.53869 2.148 7.94669 2.568 8.46269 2.568ZM15.0533 2.568C15.5693 2.568 15.9773 2.148 15.9773 1.596C15.9773 1.032 15.5693 0.624 15.0533 0.624C14.5373 0.624 14.1293 1.032 14.1293 1.596C14.1293 2.148 14.5373 2.568 15.0533 2.568Z"
                      fill="black"
                      fill-opacity="0.5"
                    />
                  </svg>
                );
              },
            )}
      </NumBtnBox>
      {nextStart < totalPages * 5 && (
        <NextBtn
          onClick={() => setCurrentStart(nextStart)}
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
        >
          <path
            d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
            fill="black"
          />
        </NextBtn>
      )}
    </BtnBox>
  );
};

export default PageBtns;
