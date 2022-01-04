import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface Prop {
  data: {
    type: string;
    placeholder: string;
    title: string;
  };
  event: ChangeEventHandler;
  value: string;
}

const InputBox: React.FC<Prop> = ({ data, value, event }: Prop) => {
  // data : {  type: string, placeholder: string, value: string, event: function, title: string }
  const { type, placeholder, title } = data;

  return (
    <Wrapper>
      <Label>{title}</Label>
      <Input name={title} type={type} placeholder={placeholder} value={value} onChange={event} />
    </Wrapper>
  );
};

export default InputBox;

const Wrapper = styled.div`
  padding-bottom: 1.5rem;
`;

const Label = styled.p`
  padding-bottom: 0.5rem;
  font-size: 11.5px;
  color: rgba(0, 0, 0, 0.7);
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-family: NotoSansR;
    color: rgba(0, 0, 0, 0.5);
  }
`;
