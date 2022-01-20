import { useSelector } from 'react-redux';

import { PageBtnsInterface } from '../../interface/interface';
import { BtnBox, NextBtn, NumBtnBox, NumBtn } from './PageBtnsStyle';

import { store } from '../../redux/store';
import { ADD_CURRENT, MINUS_CURRENT, CHOICE_CURRENT } from '../../redux/constants/listConstants';
import { LIST_INFO } from '../../redux/constants/listConstants';

const PageBtns: React.FC<PageBtnsInterface> = () => {
  const { currentStart }: any = useSelector(state => state);

  const { PRODUCTS_LIMIT, TOTAL_PAGES, PAGE_LIST_LIMIT } = LIST_INFO;

  const currentPage = Math.floor(currentStart / PRODUCTS_LIMIT) + 1;
  const currentPagesRange = (Math.ceil(currentPage / PAGE_LIST_LIMIT) - 1) * PAGE_LIST_LIMIT;

  console.log();

  return (
    <BtnBox>
      {currentPagesRange > 0 && (
        <NextBtn
          src="/images/before.png"
          alt="before.png"
          onClick={() => {
            store.dispatch({ type: MINUS_CURRENT });
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
                  store.dispatch({ type: CHOICE_CURRENT, payload: item + idx });
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
            store.dispatch({ type: ADD_CURRENT });
          }}
        />
      )}
    </BtnBox>
  );
};

export default PageBtns;
