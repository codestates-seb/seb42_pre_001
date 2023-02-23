import styled from 'styled-components';
import MainButton from '../MainButton';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setContent } from '../../slice/answerSlice';
const CreateAnswer = ({ question }) => {
  const [text, setText] = useState('');
  const { questionId, memberId, answers } = question;
  const [answerArr, setAnswerArr] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const editorRef = useRef(state.answer.content);
  const apiUrl = `http://localhost:8080/answers`;
  const showNotice = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };
  useEffect(() => console.log(state), []);
  const onChangeEditor = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
    dispatch(setContent(editorRef.current?.getInstance().getMarkdown()));
    console.log(state);
    setText(editorRef.current?.getInstance().getMarkdown());
    console.log(answerArr);
  };
  const handleClick = () => {
    setAnswerArr([...answers, text]);
    axios
      .post(
        apiUrl,
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
        setText('');
        // dispatch(setContent(''));
      })
      .catch((error) => console.log(error));
  };

  return (
    <CreateAnswerContainer>
      <YourAnswer>Your Answer</YourAnswer>
      <EditorContainer>
        <EditorBox
          previewStyle="vertical"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={editorRef}
          hideModeSwitch={true}
          onFocus={showNotice}
          onChange={onChangeEditor}
        />
      </EditorContainer>
      <ButtonContainer onClick={handleClick}>
        <MainButton buttonText="Post Your Answer" />
      </ButtonContainer>
    </CreateAnswerContainer>
  );
};
export default CreateAnswer;
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

const EditorBox = styled(Editor)`
  height: 254.664px;
`;
const EditorContainer = styled.div``;
