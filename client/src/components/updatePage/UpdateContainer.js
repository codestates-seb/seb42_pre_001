// 버튼 클릭 시 -> 질문 title, content, tags, 답변 content 전역 상태 삭제

import InputTags from '../../components/ask/InputTags';
import MainButton from '../../components/MainButton';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Markdown from '../Markdown';
import InputTitle from '../ask/InputTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import TextEditor from '../ask/TextEditor';
import { setContent, setTitle, setAllTags } from '../../slice/questionSlice';
// 질문 수정: 질문 title, 질문 content, 질문 tags
// 답변 수정: 질문 title, 질문 content, 답변 content
function UpdateContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookie] = useCookies();
  const { state } = useLocation();
  const { answer, question } = state;
  console.log(answer);
  let { title, allTags } = useSelector((state) => state.question);
  let Qcontent = useSelector((state) => state.question.content);
  let Acontent = useSelector((state) => state.answer.content);
  console.log(question.content);
  console.log(Qcontent);
  let requestBody = answer
    ? {
        content: Acontent,
        answerId: answer.answerId,
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
        dispatch(setContent(null), setTitle(null), setAllTags(null));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCancel = () => {
    navigate(`/questions/${question.questionId}`);
    dispatch(setContent(null), setTitle(null), setAllTags(null));
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
          <Preview content={question.content} />
        </>
      ) : null}
      <EditorBox
        title={answer ? 'Answer' : 'Body'}
        initialValue={answer ? answer.content : question.content}
      />
      <Preview content={answer ? Acontent : Qcontent} />
      {answer ? null : <InputTags defaultValue={question.tags} />}
      <SaveEditsOrCancel>
        <MainButton buttonText="Save edits" functionHandler={patchHandler} />
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
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

const Preview = styled(Markdown)`
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

const CancelButton = styled.button`
  border: none;
  color: hsl(206deg 100% 40%);
  padding: 10.4px;
  background-color: transparent;
  letter-spacing: 0.03rem;
  cursor: pointer;
  :hover {
    background-color: hsl(210deg 100% 97%);
  }
`;

export default UpdateContainer;
