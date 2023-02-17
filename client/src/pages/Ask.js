import MainContent from '../components/ask/MainContent';
import styled from 'styled-components';
import { ReactComponent as Background } from '../assets/background.svg';

function Ask() {
  return (
    <>
      <Div>
        <h1>Ask a public question</h1>
        <Background />
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

export default Ask;
