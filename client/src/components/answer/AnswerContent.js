import styled from 'styled-components';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import ViewProfile from '../ViewProfile';
import { useNavigate } from 'react-router-dom';
import { setContent } from '../../slice/answerSlice';
import { useDispatch } from 'react-redux';
import InquiryButtons from '../inquiry/InquiryButtons';
import Markdown from '../Markdown';
import axios from 'axios';
import { useCookies } from 'react-cookie';
const AnswerContent = ({ answer, question, answers, setAnswers }) => {
  const [cookie] = useCookies();
  let dispatch = useDispatch();
  const navigate = useNavigate();
  // 답변 수정 페이지 이동
  const navigateToEditPage = () => {
    navigate(`/answers/${answer.answerId}/edit`, {
      state: { answer, question },
    });
    dispatch(setContent(answer.content));
  };
  console.log(answer);
  // 답변 삭제
  const deleteAnswer = async () => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/answers`, {
        data: {
          memberId: 2,
          answerId: answer.answerId,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: cookie.accessToken,
          Refresh: cookie.refreshToken,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setAnswers(
          answers.filter((el) => {
            return el.answerId !== answer.answerId;
          })
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <VoteContainer>
        <VoteUpButton size="45px"></VoteUpButton>
        <VoteNum>0</VoteNum>
        <VoteDownButton size="45px"></VoteDownButton>
      </VoteContainer>
      <ContentContainer>
        <Markdown content={answer.content} />
        <ButtonsAndProfile>
          <InquiryButtons
            editFunction={navigateToEditPage}
            deleteFunction={deleteAnswer}
          />
          <ViewProfile
            from="answer"
            id={answer.memberId}
            name={answer.memberName}
            createdAt={answer.createdAt}
          />
        </ButtonsAndProfile>
      </ContentContainer>
    </Container>
  );
};
export default AnswerContent;
const Container = styled.div`
  width: 727px;
  padding: 16px 0px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
  display: flex;
`;
const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const VoteUpButton = styled(GoTriangleUp)`
  color: hsl(210deg 8% 75%);
  cursor: pointer;
`;
const VoteNum = styled.div`
  align-self: center;
  font-size: 21px;
  color: hsl(210deg 8% 45%);
`;
const VoteDownButton = styled(GoTriangleDown)`
  color: hsl(210deg 8% 75%);
  cursor: pointer;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 25px;
  width: 657px;
  word-wrap: break-word;
`;

const ButtonsAndProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;
