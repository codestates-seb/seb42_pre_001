import styled from 'styled-components';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import ViewProfile from '../ViewProfile';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ViewTags from '../ViewTags';
import { setContent } from '../../slice/questionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InquiryButtons from '../inquiry/InquiryButtons';
const QuestionContent = ({ question, user, tags }) => {
  const [cookie] = useCookies();
  const state = useSelector((state) => state.login);
  console.log(state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questionId } = question;
  // 질문 수정
  const navigateToEditPage = () => {
    navigate(`/questions/${questionId}/edit`, {
      state: { question },
    });
    dispatch(setContent(question.content));
  };

  // 질문 삭제
  const deletePost = async () => {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/questions/${questionId}`,
      {
        data: {
          memberId: 1,
          questionId: questionId,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: cookie.accessToken,
          Refresh: cookie.refreshToken,
        },
      }
    );
  };

  return (
    <Container>
      <VoteContainer>
        <VoteUpButton size="45px"></VoteUpButton>
        <VoteNum>0</VoteNum>
        <VoteDownButton size="45px"></VoteDownButton>
      </VoteContainer>
      <ContentContainer>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {question.content}
        </ReactMarkdown>
        <ViewTags tags={tags} />
        <ButtonsAndProfile>
          <InquiryButtons
            editFunction={navigateToEditPage}
            deleteFunction={deletePost}
          />
          <ViewProfile user={user} />
        </ButtonsAndProfile>
      </ContentContainer>
    </Container>
  );
};
export default QuestionContent;

const Container = styled.div`
  width: 727px;
  padding: 24px 0px;
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
  width: 657px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 25px;
  word-wrap: break-word;
`;

const ButtonsAndProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;
