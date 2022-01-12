import React from 'react';

import { BannerInterface } from '../../interface/interface';
import { Wrapper, SubWrapper, Profile, UserName, TagBox, Tag, Discription, Email } from './BannerStyle';

const Banner: React.FC<BannerInterface> = ({ userData }) => {
  const { banner, profile, username, introduction, receiveOnly, carrerFirst, carrerSecond } = userData;

  const TAG_LIST = [carrerFirst, carrerSecond];

  return (
    <Wrapper banner={banner?.url}>
      <SubWrapper>
        <Profile src={profile?.url} alt="profile_img" width={80} height={80} />
        <UserName>{username}</UserName>
        <TagBox>
          {TAG_LIST.map((tagName, idx) => (
            <Tag key={`${idx}_tag`}>#{tagName}</Tag>
          ))}
        </TagBox>
        <Discription>{introduction}</Discription>
        <Email>{receiveOnly}</Email>
      </SubWrapper>
    </Wrapper>
  );
};

export default Banner;
