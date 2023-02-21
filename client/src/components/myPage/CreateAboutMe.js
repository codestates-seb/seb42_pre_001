import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';

export default function CreateAboutMe({ setAbout, about }) {
  const editorRef = useRef(null);
  const contentRef = useRef(null);

  console.log(about);
  const showNotice = () => {
    setAbout(editorRef.current?.getInstance().getHTML());
  };

  const setNotice = () => {
    setAbout(editorRef.current?.getInstance().getHTML());
    contentRef.cuurent = editorRef.current?.getInstance().getHTML();
  };
  return (
    <Container>
      <EditorContainer>
        <EditorBox
          previewStyle="vertical"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={editorRef}
          onFocus={showNotice}
          onChange={setNotice}
        />
      </EditorContainer>
      <EditorContent ref={contentRef}></EditorContent>
      <ButtonContainer></ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 960px;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0px 15px 0px;
`;

const EditorBox = styled(Editor)`
  height: 254.664px;
`;

const EditorContent = styled.div`
  width: 100px;
`;

const EditorContainer = styled.div``;
