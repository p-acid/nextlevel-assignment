import styled from 'styled-components';

export const Wrapper = styled.div<{ banner: string }>`
  display: flex;
  justify-content: center;
  height: 20rem;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0) 42.81%, #121212 100%), url(${({ banner }) => banner});
  background-size: cover;
  background-position: center;
`;

export const SubWrapper = styled.div`
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

export const Profile = styled.img`
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;

export const UserName = styled.h2`
  margin-top: 0.75rem;
  font-size: 25px;
`;

export const TagBox = styled.ul`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const Tag = styled.li`
  line-height: 145%;
`;

export const Discription = styled.p`
  margin-top: 0.5rem;
  font-size: 14px;
  line-height: 142%;
`;

export const Email = styled.div`
  margin-top: 0.5rem;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.3);
`;
