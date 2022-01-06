import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 375px;
`;

export const Logo = styled.img`
  padding-bottom: 1.5rem;
`;

export const Title = styled.h2`
  padding-bottom: 1.5rem;
  font-family: NotoSansB;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 0;
  width: 100%;
  border-radius: 4rem;
  font-family: NotoSansB;
  background-color: ${({ theme }) => theme.pr.main};
  cursor: ${({ disabled }) => !disabled && 'pointer'};
`;
