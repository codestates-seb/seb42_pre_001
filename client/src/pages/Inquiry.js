import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import QuestionList from '../components/inquiry/QuestionList';
import QuestionSidebar from '../components/inquiry/QuestionSidebar';

const Inquiry = () => {
  return (
    <InquiryContainer>
      <LeftSidebar />
      <InquiryContentContainer>
        <QuestionList name="All Questions"></QuestionList>
        <QuestionSidebar></QuestionSidebar>
      </InquiryContentContainer>
    </InquiryContainer>
  );
};

export default Inquiry;

const InquiryContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InquiryContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: row;
`;
