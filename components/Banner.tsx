import React from 'react';
import styled from 'styled-components';

interface Url {
  url: string;
}

interface BannerI {
  userData: {
    banner: Url;
    profile: Url;
    username: string;
    introduction: string;
    receiveOnly: string;
    carrerFirst: string;
    carrerSecond: string;
  };
}

const Banner: React.FC<BannerI> = ({ userData }) => {
  const { banner, profile, username, introduction, receiveOnly, carrerFirst, carrerSecond } = userData;

  const TAG_LIST = [carrerFirst, carrerSecond];

  return (
    <Wrapper banner={banner.url}>
      <SubWrapper>
        <Profile src={profile.url} alt="profile_img" width={80} height={80} />
        <UserName>{username}</UserName>
        <TagBox>
          {TAG_LIST.map((tagName, idx) => (
            <Tag key={idx}>#{tagName}</Tag>
          ))}
        </TagBox>
        <Discription>{introduction}</Discription>
        <Email>{receiveOnly}</Email>
      </SubWrapper>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div<{ banner: string }>`
  display: flex;
  justify-content: center;
  height: 20rem;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0) 42.81%, #121212 100%), url(${({ banner }) => banner});
  background-position: center;
`;

const SubWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  color: white;

  & > h2,
  & > ul > li,
  & > p {
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
  }
`;

const Profile = styled.img`
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;

const UserName = styled.h2`
  margin-top: 0.75rem;
  font-size: 25px;
`;

const TagBox = styled.ul`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const Tag = styled.li``;

const Discription = styled.p`
  margin-top: 0.5rem;
`;

const Email = styled.div`
  margin-top: 0.5rem;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.3);
`;
