import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 6rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;

  ul {
    margin: 0;
    font-size: 12px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const StatisticData = styled.div`
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: rgba(0, 0, 0, 0.5);
`;

export const ProductImage = styled.img`
  width: 30rem;
  height: 20rem;
  border-radius: 1rem;
  object-fit: cover;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;

  button {
    margin-top: 0;
    font-size: 1rem;
  }

  button:first-child {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const BackBtn = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 4rem;
  font-size: 14px;
  line-height: 142%;
  text-align: center;
  letter-spacing: -0.025em;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
