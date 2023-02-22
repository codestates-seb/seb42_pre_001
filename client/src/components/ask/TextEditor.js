import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { AskBoxStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setContentErrorMsg } from '../../slice/questionSlice';

function TextEditor({ title, desc }) {
  let editorRef = useRef(null);
  let dispatch = useDispatch();
  let state = useSelector((state) => state);

  let setContentText = () => {
    dispatch(setContent(editorRef.current?.getInstance().getMarkdown()));
    console.log(state.question.content);
    // console.log(editorRef.current?.getInstance().getHTML());
  };

  let isContentValid = false;
  let validationContent = () => {
    if (!state.question.content?.length) {
      isContentValid = false;
      dispatch(setContentErrorMsg('Body is missing.'));
    } else {
      isContentValid = true;
      dispatch(setContentErrorMsg('')); // 이거 없으면 왜 안되지
    }
  };

  useEffect(() => {
    validationContent();
    // if (state.question.titleErrorMsg) {
    //   console.log(state.question.titleErrorMsg);
    //   editorRef.current.getInstance().blur();
    // } else {
    //   editorRef.current.getInstance().focus();
    // }
  }, [state]);

  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <EditorBox
          previewStyle="vertical"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={editorRef}
          onKeyup={setContentText}
        />
      </div>
      {/* <MainButton buttonText="Next" /> */}
      {isContentValid ? null : <div>{state.question.contentErrorMsg}</div>}
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;
const EditorBox = styled(Editor)`
  height: 254.664px;
`;
export default TextEditor;
