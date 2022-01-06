import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 1.5rem;
`;

export const Label = styled.p`
  padding-bottom: 0.5rem;
  font-size: 11.5px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-family: NotoSansR;
    color: rgba(0, 0, 0, 0.5);
  }
`;
