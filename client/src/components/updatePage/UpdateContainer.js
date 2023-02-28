// 버튼 클릭 시 -> 질문 title, content, tags, 답변 content 전역 상태 삭제
// dispatch(setContent(null), setTitle(null), setAllTags(null));
import InputTags from '../../components/ask/InputTags';
import MainButton from '../../components/MainButton';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import InputTitle from '../ask/InputTitle';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import TextEditor from '../ask/TextEditor';
// import { setContent, setTitle, setAllTags } from '../../slice/questionSlice';
// 질문 수정: 질문 title, 질문 content, 질문 tags
// 답변 수정: 질문 title, 질문 content, 답변 content
function UpdateContainer() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookie] = useCookies();
  const { state } = useLocation();
  const { answer, question } = state;
  let { title, allTags } = useSelector((state) => state.question);
  let Qcontent = useSelector((state) => state.question.content);
  let Acontent = useSelector((state) => state.answer.content);
  console.log(question.content);
  console.log(Qcontent);
  let requestBody = answer
    ? {
        content: Acontent,
        questionId: question.questionId,
        memberId: 2,
      }
    : {
        content: Qcontent,
        title: title,
        questionId: question.questionId,
        memberId: 2,
        tags: allTags,
      };
  console.log(requestBody);

  // 질문/답변 수정
  const url = answer
    ? `${process.env.REACT_APP_API_URL}/answers`
    : `${process.env.REACT_APP_API_URL}/questions`;
  console.log(url);
  const patchHandler = async () => {
    await axios
      .patch(url, JSON.stringify(requestBody), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: cookie.accessToken,
          Refresh: cookie.refreshToken,
        },
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        navigate(`/questions/${question.questionId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <UpdateContentWrapper>
      {answer ? null : (
        <EditTitle quseiontTitle="Title" defaultValue={question.title} />
      )}
      {answer ? (
        <>
          <QuestionTitle
            onClick={() => {
              navigate(`/questions/${question.questionId}`);
            }}
          >
            {question.title}
          </QuestionTitle>
          <Preview remarkPlugins={[remarkGfm]}>{question.content}</Preview>
        </>
      ) : null}
      <EditorBox
        title={answer ? 'Answer' : 'Body'}
        initialValue={answer ? answer.content : question.content}
      />
      <Preview remarkPlugins={[remarkGfm]}>
        {answer ? Acontent : Qcontent}
      </Preview>
      {answer ? null : <InputTags defaultValue={question.tags} />}
      <SaveEditsOrCancel>
        <MainButton buttonText="Save edits" functionHandler={patchHandler} />
        <MainButton buttonText="Cancel" />
      </SaveEditsOrCancel>
    </UpdateContentWrapper>
  );
}

const UpdateContentWrapper = styled.div`
  background-color: white;
  width: 662px;
  > div {
    border: none;
    width: 100%;
    padding: 0 0 15px;
  }
`;

const Preview = styled(ReactMarkdown)`
  white-space: normal;
  word-wrap: break-word;
  > p {
    margin-bottom: 16.5px;
  }
`;

const EditTitle = styled(InputTitle)``;

const EditorBox = styled(TextEditor)``;

const SaveEditsOrCancel = styled.div`
  display: flex;
`;

const QuestionTitle = styled.a`
  display: block;
  margin: 16px 0;
  color: hsl(209deg 100% 38%);
  font-size: 1.30769231rem;
  cursor: pointer;
`;

export default UpdateContainer;
