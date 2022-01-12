import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  padding: 1rem 2.5rem;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  padding-left: 1rem;
  font-weight: bold;
  font-size: 21px;
  line-height: 132%;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.pr.dark};
`;

export const LogoutBtn = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.pr.dark};
  border-radius: 64px;
  color: ${({ theme }) => theme.pr.dark};
  background-color: white;
  cursor: pointer;
`;
