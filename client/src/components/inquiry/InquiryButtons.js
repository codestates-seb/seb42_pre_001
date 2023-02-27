import styled from 'styled-components';

function InquiryButtons({ editFunction, deleteFunction }) {
  return (
    <ButtonWrapper>
      <QuestionButton>Share</QuestionButton>
      <QuestionButton onClick={editFunction}>Edit</QuestionButton>
      {/* 내가 작성한 글일 때 */}
      <QuestionButton onClick={deleteFunction}>Delete</QuestionButton>
      <QuestionButton>Flag</QuestionButton>
      {/* 아닐 때 */}
      <QuestionButton>Follow</QuestionButton>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div``;
const QuestionButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 4px;
  color: hsl(210deg 8% 45%);
`;

export default InquiryButtons;
