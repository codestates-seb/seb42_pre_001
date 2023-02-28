import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAboutMe } from '../../slice/myInfoSlice';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function CreateAboutMe({ content }) {
  const editorRef = useRef(null);
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  const setNotice = () => {
    dispatch(setAboutMe(editorRef.current?.getInstance().getMarkdown()));
    console.log(state);
  };
  return (
    <Container>
      <EditorContainer>
        <EditorBox
          previewStyle="tab"
          initialEditType="markdown"
          hideModeSwitch={true}
          useCommandShortcut={true}
          ref={editorRef}
          onChange={setNotice}
        />
      </EditorContainer>
      <EditorContent ref={contentRef}></EditorContent>
      <AboutMeContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </AboutMeContent>
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

const AboutMeContent = styled.div`
  max-width: 1000px;
  max-height: 300px;
  word-break: break-all;
  min-height: 30px;
  margin: 25px 0 15px 0;
`;
