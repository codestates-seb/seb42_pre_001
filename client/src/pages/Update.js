import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import QuestionSidebar from '../components/inquiry/QuestionSidebar';
import UpdateContainer from '../components/updatePage/UpdateContainer';

function Update() {
  return (
    <UpdatePageWrapper>
      <LeftSidebar pageName="questions" />
      <UpdatePageContent>
        <UpdatePageMain>
          <UpdateContainer />
        </UpdatePageMain>
        <QuestionSidebar />
      </UpdatePageContent>
    </UpdatePageWrapper>
  );
}
const UpdatePageWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  margin: 0 auto;
  max-width: 1264px;
`;

const UpdatePageContent = styled.div`
  display: flex;
  min-height: 750px;
  overflow: visible;
  padding: 24px;
`;

const UpdatePageMain = styled.main`
  max-width: 662px;
`;
export default Update;
