import React, { ChangeEventHandler } from 'react';
import { Wrapper, Label, Input } from './InputBoxStyle';

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
  const { type, placeholder, title } = data;

  return (
    <Wrapper>
      <Label>{title}</Label>
      <Input name={title.toLowerCase()} type={type} placeholder={placeholder} value={value} onChange={event} />
    </Wrapper>
  );
};

export default InputBox;
