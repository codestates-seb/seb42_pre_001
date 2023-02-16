import MainContent from '../components/MainContent';
import styled from 'styled-components';
import { ReactComponent as Background } from '../assets/background.svg';

function Questions() {
  return (
    <>
      <Div>
        <h1>Ask a public question</h1>
        <Background width="100" />
      </Div>
      <Div>
        <MainContent />
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: hsl(210, 8%, 95%);
  display: flex;
`;

export default Questions;
