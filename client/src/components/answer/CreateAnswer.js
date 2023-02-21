import styled from 'styled-components';
import MainButton from '../MainButton';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef, useState } from 'react';
import axios from 'axios';
//questionId, memberId, content : 생성
//answerId, memberId, content: 수정
const CreateAnswer = ({ question }) => {
  const [text, setText] = useState('');
  const editorRef = useRef(null);
  const { postId } = question;

  const showNotice = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };
  const onChangeEditor = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };
  const handleClick = () => {
    setText(editorRef.current?.getInstance().getMarkdown());
    axios
      .post(
        'https://preproject-3ea3e-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json',
        {
          postId,
          author: 'myungju kang',
          contents: text,
        }
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <Container>
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
    </Container>
  );
};
export default CreateAnswer;
const Container = styled.div`
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
