import { BtnBox, NextBtn, NumBtnBox, NumBtn } from './PageBtnsStyle';

import { LIST_INFO } from '../../public/constants/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { next, before, picked } from '../../feature/currentStart/currentStartSlice';

const PageBtns: React.FC = () => {
  const currentStart = useAppSelector(state => state.currentStart.value);
  const dispatch = useAppDispatch();

  const { PRODUCTS_LIMIT, TOTAL_PAGES, PAGE_LIST_LIMIT } = LIST_INFO;

  const currentPage = Math.floor(currentStart / PRODUCTS_LIMIT) + 1;
  const currentPagesRange = (Math.ceil(currentPage / PAGE_LIST_LIMIT) - 1) * PAGE_LIST_LIMIT;

  return (
    <BtnBox>
      {currentPagesRange > 0 && (
        <NextBtn
          src="/images/before.png"
          alt="before.png"
          onClick={() => {
            dispatch(before());
          }}
        />
      )}
      <NumBtnBox>
        {Array(currentPagesRange + PAGE_LIST_LIMIT > TOTAL_PAGES ? TOTAL_PAGES - currentPagesRange : PAGE_LIST_LIMIT)
          .fill(currentPagesRange)
          .map((item, idx) => {
            return (
              <NumBtn
                key={`${idx}_Num_Btn`}
                isCurrentPage={currentPage === item + idx + 1}
                onClick={() => {
                  dispatch(picked(item + idx));
                }}
              >
                {item + idx + 1}
              </NumBtn>
            );
          })}
      </NumBtnBox>
      {currentPagesRange + PAGE_LIST_LIMIT < TOTAL_PAGES && (
        <NextBtn
          src="/images/next.png"
          alt="next.png"
          onClick={() => {
            dispatch(next());
          }}
        />
      )}
    </BtnBox>
  );
};

export default PageBtns;
