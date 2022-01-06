import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface ListI {
  contentList: {
    data: Array<{
      _id: string;
      images: Array<{
        name: string;
        url: string;
      }>;
      title: string;
      businessPrice: number;
      enterprisePrice: number;
      individualPrice: number;
      companyPrice: number;
      personalPrice: number;
      userinfo: {
        username: string;
        profile: {
          url: string;
        };
      };
      view: number;
      interest: number;
    }>;
  };
}

const List: React.FC<ListI> = ({ contentList }) => {
  return (
    <Wrapper>
      {contentList?.data.map(item => {
        const {
          _id,
          images,
          title,
          businessPrice,
          enterprisePrice,
          individualPrice,
          companyPrice,
          personalPrice,
          userinfo,
          view,
          interest,
        } = item;

        const { username, profile } = userinfo;
        const lowestPrice = Math.min(
          ...[businessPrice, enterprisePrice, individualPrice, companyPrice, personalPrice].filter(item => item >= 0),
        );

        return (
          <Item key={_id}>
            <ProductImg src={images} />
            <InfoBox>
              <Title href={`/content/${_id}`}>{title}</Title>
              <UserBox>
                <UserImage src={profile?.url} width={16} height={16} alt="profile_img" />
                <UserName>{username}</UserName>
              </UserBox>
              <SubInfoBox>
                <Price>{lowestPrice.toLocaleString()} P</Price>
                <div>
                  <span>{view} 뷰</span>
                  <span>{interest} 찜</span>
                </div>
              </SubInfoBox>
            </InfoBox>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.ul`
  margin: 0 auto;
  padding-top: 25px;
  width: 570px;
`;

const Item = styled.li`
  display: flex;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const ProductImg = styled.div<{ src: Array<{ url: string }> }>`
  min-width: 254px;
  min-height: 132px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: url(${({ src }) => src[0]?.url});
  background-size: cover;
  background-position: center;

  &:hover {
    background: url(${({ src }) => src[1]?.url});
    background-size: cover;
    background-position: center;
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
`;

const Title = styled(Link)`
  font-size: 14px;
  line-height: 142%;
  letter-spacing: -0.025em;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.38rem;
`;

const UserImage = styled.img`
  border-radius: 50%;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 10px;
  line-height: 140%;
`;

const SubInfoBox = styled.div`
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

const Price = styled.span`
  font-size: 14px;
  line-height: 142%;
  letter-spacing: -0.025em;
`;
