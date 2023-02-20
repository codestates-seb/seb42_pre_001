import styled from 'styled-components';
import MainButton from '../MainButton';
import { AskBoxStyle, InputStyle } from './AskStyle';
function Input({ title, desc }) {
  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <AskPageInput />
      </div>
      <MainButton buttonText="Next" />
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)``;
export default Input;
