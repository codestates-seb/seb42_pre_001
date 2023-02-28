import { useSelector } from 'react-redux';
import styled from 'styled-components';

function InquiryButtons({ editFunction, deleteFunction }) {
  const { isLogin } = useSelector((state) => state.login);
  console.log(isLogin);
  return (
    <ButtonWrapper>
      <QuestionButton>Share</QuestionButton>
      {/* 질문, 답변 멤버 id 검증 추가해야 함 */}
      {isLogin ? (
        <>
          {/* 내가 작성한 글일 때 */}
          <QuestionButton onClick={editFunction}>Edit</QuestionButton>
          <QuestionButton onClick={deleteFunction}>Delete</QuestionButton>
          <QuestionButton>Flag</QuestionButton>
        </>
      ) : (
        <QuestionButton> {/* 아닐 때 */}Follow</QuestionButton>
      )}
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
