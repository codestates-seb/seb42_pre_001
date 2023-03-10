import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import AnswerContent from '../components/answer/AnswerContent';
import AnswerCount from '../components/answer/AnswerCount';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import QuestionSidebar from '../components/inquiry/QuestionSidebar';
import QuestionContent from '../components/question/QuestionContent';
import QuestionTitle from '../components/question/QuestionTitle';
import MainButton from '../components/MainButton';
import ViewTags from '../components/ViewTags';
import { useCookies } from 'react-cookie';
import Loading from '../components/Loading';
import { HiOutlineExclamation } from 'react-icons/hi';
import ScrollToTop from '../components/ScrollToTop';

//질문 상세 페이지
const Answers = () => {
  const { id } = useParams();
  const [cookie] = useCookies();
  const [isLoading, setIsLoading] = useState(true);
  const [answersLength, setAnswersLength] = useState(0);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const ErrorMsg = 'Content must be at least 30 characters.';
  const [isValid, setIsValid] = useState(true);
  const [text, setText] = useState('');
  const { questionId } = question;
  const navigate = useNavigate();
  const editorRef = useRef();
  const apiUrl = `${process.env.REACT_APP_API_URL}/questions/${id}`;
  const AnswerapiUrl = `${process.env.REACT_APP_API_URL}/answers`;

  //질문조회
  useEffect(() => {
    const getQuestion = async () => {
      if (cookie.accessToken && cookie.refreshToken) {
        try {
          const response = await axios.get(apiUrl, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: cookie.accessToken,
              Refresh: cookie.refreshToken,
            },
            withCredentials: true,
          });
          const { data } = response;
          setQuestion(data.data);
          setAnswers(data.data.answers);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await axios.get(apiUrl);
          const { data } = response;
          setQuestion(data.data);
          setAnswers(data.data.answers);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getQuestion();
  }, [answersLength]);
  // 댓글 생성
  const onChangeEditor = () => {
    setText(editorRef.current?.getInstance().getMarkdown());
  };
  const handleClick = async () => {
    if (text.length < 30) {
      setIsValid(false);
    } else {
      try {
        const response = await axios.post(
          AnswerapiUrl,
          JSON.stringify({
            questionId,
            memberId: cookie.loginMemberId,
            content: text,
          }),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: cookie.accessToken,
              Refresh: cookie.refreshToken,
            },
            withCredentials: true,
          }
        );
        console.log(response);
        setText('');
        setIsValid(true);
        setAnswersLength(answers.length + 1);
        window.scrollTo(0, 0);
        editorRef.current?.getInstance().reset();
      } catch (error) {
        if (error.response.status === 403) {
          if (
            confirm('로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?')
          ) {
            navigate('/users/login');
          } else {
            return false;
          }
        }
      }
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <LeftSidebar text={text} />
      <ContentContainer>
        <QuestionTitle title={question.title} />
        <ContentWrapper>
          <ViewContent>
            <QuestionContent question={question} tags={question.tags} />
            <AnswerContainer>
              <AnswerCount answers={answers} />
              {answers.map((el, idx) => (
                <AnswerContent
                  key={idx}
                  answer={el}
                  question={question}
                  answers={answers}
                  setAnswers={setAnswers}
                />
              ))}
              <ScrollToTop />
              <CreateAnswerContainer>
                <YourAnswer>Your Answer</YourAnswer>
                <EditorBox
                  previewStyle="tab"
                  initialEditType="markdown"
                  hideModeSwitch={true}
                  useCommandShortcut={true}
                  ref={editorRef}
                  onChange={onChangeEditor}
                />
                {isValid ? (
                  <Error></Error>
                ) : (
                  <Error>
                    <Icon size={20} />
                    <Msg>{ErrorMsg}</Msg>
                  </Error>
                )}
                <ButtonContainer>
                  <ButtonWrapper onClick={handleClick}>
                    <MainButton buttonText="Post Your Answer" />
                  </ButtonWrapper>
                </ButtonContainer>
              </CreateAnswerContainer>
              <QuestionBottom>
                {`Not the answer you're looking for? Browse other questions tagged `}
                <ViewTags tags={question.tags} />
                {`or `}
                <QuestionBottomAsk>{`ask your own question`}</QuestionBottomAsk>
                {`.`}
              </QuestionBottom>
            </AnswerContainer>
          </ViewContent>
          <QuestionSidebar />
        </ContentWrapper>
      </ContentContainer>
    </Container>
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
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ViewContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswerContainer = styled.div`
  padding-top: 10px;
`;
const QuestionBottom = styled.span`
  margin-top: 15px;
  font-size: 17px;
`;
const QuestionBottomAsk = styled.span`
  margin-top: 15px;
  font-size: 17px;
  color: hsl(206deg 100% 40%);
  cursor: pointer;
  :hover {
    color: hsl(206deg 100% 52%);
  }
  :visited {
    text-decoration: none;
  }
`;
const CreateAnswerContainer = styled.div`
  width: 727px;
`;
const YourAnswer = styled.div`
  padding: 20px 0px;
  font-size: 19px;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0px 15px 0px;
`;
const ButtonWrapper = styled.div``;
const EditorBox = styled(Editor)`
  height: 254.664px;
`;
const Error = styled.div`
  display: flex;
  height: 29px;
  font-weight: 600;
  font-size: 15px;
  color: hsl(358deg 62% 52%);
`;
const Msg = styled.div`
  margin-left: 3px;
  align-self: flex-end;
`;
const Icon = styled(HiOutlineExclamation)`
  align-self: flex-end;
`;
