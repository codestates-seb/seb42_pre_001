import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';

const Tages = () => {
  return (
    <TagesContainer>
      <LeftSidebar pageName="tages" />
      <TagesContentContainer>
        <h1>Tages</h1>
      </TagesContentContainer>
    </TagesContainer>
  );
};
export default Tages;

const TagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TagesContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: row;
`;
