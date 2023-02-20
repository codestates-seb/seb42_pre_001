import styled from 'styled-components';
import MainButton from '../MainButton';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
const CreateAnswer = () => {
  const editorRef = useRef(null);

  const showNotice = () => {
    console.log(editorRef.current?.getInstance().getHTML());
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
          onFocus={showNotice}
        />
      </EditorContainer>
      <ButtonContainer>
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
