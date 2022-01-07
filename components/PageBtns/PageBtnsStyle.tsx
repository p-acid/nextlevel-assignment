import styled from 'styled-components';

export const BtnBox = styled.div`
  position: fixed;
  bottom: 2.875rem;
  right: 2.875rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 8px 16px;
  border-radius: 32px;
  background-color: white;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.48);
`;

export const NumBtnBox = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NextBtn = styled.svg`
  cursor: pointer;
`;

export const NumBtn = styled.button<{ isCurrentPage: boolean }>`
  padding: 0;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: ${({ isCurrentPage, theme }) => (isCurrentPage ? theme.pr.main : 'rgba(0, 0, 0, 0.5)')};
  background-color: white;
  cursor: pointer;
`;
