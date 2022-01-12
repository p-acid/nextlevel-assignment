import styled from 'styled-components';
import Link from 'next/link';

export const Item = styled.li`
  display: flex;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

export const ProductImg = styled.div<{ src: Array<{ url: string }> }>`
  min-width: 254px;
  min-height: 132px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: url(${({ src }) => src[0]?.url});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:hover {
    ${({ src }) =>
      src[1] &&
      `background: url(${src[1].url});
    background-size: cover;
    background-position: center;`}
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
`;

export const Title = styled(Link)`
  font-size: 14px;
  line-height: 142%;
  letter-spacing: -0.025em;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.38rem;
`;

export const UserImage = styled.img`
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 10px;
  line-height: 140%;
`;

export const SubInfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  & > div > span {
    padding-left: 0.5rem;
    font-weight: bold;
    font-size: 10px;
    line-height: 140%;
    letter-spacing: -0.03em;
  }
`;

export const Price = styled.span`
  font-size: 14px;
  line-height: 142%;
  letter-spacing: -0.025em;
`;
