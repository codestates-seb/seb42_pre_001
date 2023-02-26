import styled from 'styled-components';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import ViewProfile from '../ViewProfile';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useNavigate } from 'react-router-dom';
import { setContent } from '../../slice/answerSlice';
import { useDispatch } from 'react-redux';
const AnswerContent = ({ answer, question }) => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const editAnswer = () => {
    navigate(`/answers/${answer.answerId}/edit`, {
      state: { answer, question },
    });
    dispatch(setContent(answer.content));
  };
  console.log(answer);
  const deleteAnswer = () => {};
  return (
    <Container>
      <VoteContainer>
        <VoteUpButton size="45px"></VoteUpButton>
        <VoteNum>0</VoteNum>
        <VoteDownButton size="45px"></VoteDownButton>
      </VoteContainer>
      <ContentContainer>
        <ReactMarkdownContainer remarkPlugins={[remarkGfm]}>
          {answer.content}
        </ReactMarkdownContainer>
        <button onClick={editAnswer}>답변 수정 버튼입니다</button>
        <button onClick={deleteAnswer}>답변 삭제 버튼입니다</button>
        <ViewProfile user={answer.memberName} />
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
const ReactMarkdownContainer = styled(ReactMarkdown)`
  width: 657px;
  word-wrap: break-word;
`;
