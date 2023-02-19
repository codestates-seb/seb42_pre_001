import styled from 'styled-components';
import Footer from '../components/Footer';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import QuestionSidebar from '../components/inquiry/QuestionSidebar';
import QuestionContent from '../components/question/QuestionContent';
import QuestionTitle from '../components/question/QuestionTitle';

const Answers = () => {
  return (
    <>
      <Container>
        <LeftSidebar />
        <ContentContainer>
          <QuestionTitle />
          <ContentWrapper>
            <QuestionContent />
            <QuestionSidebar></QuestionSidebar>
          </ContentWrapper>
        </ContentContainer>
      </Container>
      <Footer />
    </>
  );
};
export default Answers;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px 0px 0px 24px;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
