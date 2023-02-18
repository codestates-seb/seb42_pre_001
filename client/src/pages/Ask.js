import MainContent from '../components/ask/MainContent';
import styled from 'styled-components';

function Ask() {
  return (
    <Content>
      <MainContent />
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 750px;
  overflow: visible;
  background-color: transparent;
`;

export default Ask;
