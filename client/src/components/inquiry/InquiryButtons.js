import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
function InquiryButtons({
  editFunction,
  deleteFunction,
  qMemberId,
  aMemberId,
}) {
  const { isLogin } = useSelector((state) => state.login);
  const [cookie] = useCookies();
  const loginMemberId = Number(cookie.loginMemberId);
  const QnAMemberId = qMemberId || aMemberId;
  return (
    <ButtonWrapper>
      <QuestionButton>Share</QuestionButton>
      {isLogin && loginMemberId === QnAMemberId ? (
        <>
          <QuestionButton onClick={editFunction}>Edit</QuestionButton>
          <QuestionButton onClick={deleteFunction}>Delete</QuestionButton>
          <QuestionButton>Flag</QuestionButton>
        </>
      ) : (
        <QuestionButton>Follow</QuestionButton>
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
