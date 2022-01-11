import { InputBoxInterface } from '../../interface/interface';
import { Wrapper, Label, Input } from './InputBoxStyle';

const InputBox: React.FC<InputBoxInterface> = ({ data, value, event }: InputBoxInterface) => {
  const { type, placeholder, title } = data;

  return (
    <Wrapper>
      <Label>{title}</Label>
      <Input name={title.toLowerCase()} type={type} placeholder={placeholder} value={value} onChange={event} />
    </Wrapper>
  );
};

export default InputBox;
