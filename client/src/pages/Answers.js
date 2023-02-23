import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import AnswerContent from '../components/answer/AnswerContent';
import AnswerCount from '../components/answer/AnswerCount';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import QuestionSidebar from '../components/inquiry/QuestionSidebar';
import QuestionContent from '../components/question/QuestionContent';
import QuestionTitle from '../components/question/QuestionTitle';
import ViewTags from '../components/ViewTags';
import MainButton from '../components/MainButton';

//질문 상세 페이지
const Answers = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [text, setText] = useState('');
  const { questionId, memberId } = question;
  const editorRef = useRef();
  const apiUrl = `http://localhost:8080/questions/${id}`;
  const AnswerapiUrl = `http://localhost:8080/answers`;
  //질문조회
  useEffect(() => {
    const getQuestion = async () => {
      const response = await axios.get(apiUrl);
      const { data } = response;
      setQuestion(data.data);
      setAnswers(data.data.answers);
    };
    getQuestion();
  }, []);
  // 댓글 생성
  const onChangeEditor = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
    setText(editorRef.current?.getInstance().getMarkdown());
  };
  const handleClick = () => {
    axios
      .post(
        AnswerapiUrl,
        JSON.stringify({
          questionId,
          memberId,
          content: text,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res);
        setAnswers([
          ...answers,
          {
            questionId,
            memberId,
            content: text,
          },
        ]);
        setText('');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container>
        <LeftSidebar text={text} />
        <ContentContainer>
          <QuestionTitle title={question.title} />
          <ContentWrapper>
            <ViewContent>
              <QuestionContent
                content={question.content}
                user={question.memberName}
              />
              <AnswerContainer>
                {answers ? (
                  <>
                    <AnswerCount answers={answers} />
                    {answers.map((el, idx) => (
                      <AnswerContent key={idx} answer={el} />
                    ))}
                  </>
                ) : null}
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
                  <ButtonContainer>
                    <ButtonWrapper onClick={handleClick}>
                      <MainButton buttonText="Post Your Answer" />
                    </ButtonWrapper>
                  </ButtonContainer>
                </CreateAnswerContainer>
                <QuestionBottom>
                  {`Not the answer you're looking for? Browse other questions tagged `}
                  <ViewTags />
                  {` or `}
                  <QuestionBottomAsk>{`ask your own question`}</QuestionBottomAsk>
                  {`.`}
                </QuestionBottom>
              </AnswerContainer>
            </ViewContent>
            <QuestionSidebar />
          </ContentWrapper>
        </ContentContainer>
      </Container>
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
