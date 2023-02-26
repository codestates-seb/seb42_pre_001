// 버튼 클릭 시 -> 질문 title, content, tags, 답변 content 전역 상태 삭제
import InputTags from '../../components/ask/InputTags';
import MainButton from '../../components/MainButton';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import InputTitle from '../ask/InputTitle';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import TextEditor from '../ask/TextEditor';

// 질문 수정: 질문 title, 질문 content, 질문 tags
// 답변 수정: 질문 title, 질문 content, 답변 content
function UpdateContainer() {
  const [cookie] = useCookies();
  const { state } = useLocation();
  const { answer, question } = state;
  let { title, allTags } = useSelector((state) => state.question);
  let Qcontent = useSelector((state) => state.question.content);
  let Acontent = useSelector((state) => state.answer.content);

  let requestBody = {
    content: Qcontent,
    title: title,
    questionId: 39,
    memberId: 1,
    tags: allTags,
  };

  const patchHandler = async () => {
    await axios.patch(
      `${process.env.REACT_APP_API_URL}/questions/39`,
      JSON.stringify(requestBody),
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
    <UpdateContentWrapper>
      {answer ? null : (
        <EditTitle quseiontTitle="Title" defaultValue={question.title} />
      )}
      {answer ? (
        <>
          <div>{question.title}</div>
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
`;

const EditTitle = styled(InputTitle)``;

const EditorBox = styled(TextEditor)``;

const SaveEditsOrCancel = styled.div`
  display: flex;
`;
export default UpdateContainer;
