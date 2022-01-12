import { PageBtnsInterface } from '../../interface/interface';
import { BtnBox, NextBtn, NumBtnBox, NumBtn } from './PageBtnsStyle';

const PageBtns: React.FC<PageBtnsInterface> = ({ listInfo, currentStart, setCurrentStart }) => {
  const { PRODUCTS_LIMIT, TOTAL_PAGES, PAGE_LIST_LIMIT } = listInfo;
  const currentPage = Math.floor(currentStart / PRODUCTS_LIMIT) + 1;
  const currentPagesRange = (Math.ceil(currentPage / PAGE_LIST_LIMIT) - 1) * PAGE_LIST_LIMIT;

  return (
    <BtnBox>
      {currentPagesRange > 0 && (
        <NextBtn
          src="/images/before.png"
          alt="before.png"
          onClick={() => setCurrentStart(() => (currentPagesRange - PAGE_LIST_LIMIT) * PRODUCTS_LIMIT)}
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
                onClick={() => setCurrentStart((item + idx) * PRODUCTS_LIMIT)}
              >
                {item + idx + 1}
              </NumBtn>
            );
          })}
      </NumBtnBox>
      {currentPagesRange + PAGE_LIST_LIMIT !== TOTAL_PAGES && (
        <NextBtn
          src="/images/next.png"
          alt="next.png"
          onClick={() => setCurrentStart((currentPagesRange + PAGE_LIST_LIMIT) * PRODUCTS_LIMIT)}
        />
      )}
    </BtnBox>
  );
};

export default PageBtns;
