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

export const NextBtn = styled.svg`
  cursor: pointer;
`;

export const NumBtn = styled.button`
  margin: 0 0.25rem;
  padding: 0;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: rgba(0, 0, 0, 0.5);
  background-color: white;
  cursor: pointer;
`;
