import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useRef } from 'react';

function TextEditor({ editorTitle, editorDesc }) {
  const editorRef = useRef(null);

  const showNotice = () => {
    console.log(editorRef.current?.getInstance().getHTML());
  };

  return (
    <Div>
      <h3>{editorTitle}</h3>
      <p>{editorDesc}</p>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        onFocus={showNotice}
      />
    </Div>
  );
}

const Div = styled.div`
  border: 1px solid black;
  background-color: white;
`;

export default TextEditor;
