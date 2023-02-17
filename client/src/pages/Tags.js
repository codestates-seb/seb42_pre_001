import styled from 'styled-components';
import LeftSidebar from '../components/Inquiry/LeftSidebar';

const Tages = () => {
  return (
    <TagesContainer>
      <LeftSidebar />
      <TagesContentContainer>
        <h1>Tages</h1>
      </TagesContentContainer>
    </TagesContainer>
  );
};
export default Tages;

const TagesContainer = styled.div`
  height: 100vh;
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