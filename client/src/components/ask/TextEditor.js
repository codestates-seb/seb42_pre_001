import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { AskBoxStyle, TagBoxStyle } from './AskStyle';
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
  }, [state]);

  // 에디터 테두리 이벤트
  const editorWrapperEL = useRef(null);
  const onEditorFocus = () => {
    editorWrapperEL.current.classList.add('editorFocus');
    console.log(editorWrapperEL.current);
  };
  const onEditorBlur = () => {
    editorWrapperEL.current.classList.remove('editorFocus');
    console.log(editorWrapperEL.current);
  };

  return (
    <Div contentErrorMsg={state.question.contentErrorMsg}>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <EditorWrapper ref={editorWrapperEL}>
          <EditorBox
            previewStyle="vertical"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            ref={editorRef}
            onKeyup={setContentText}
            onFocus={onEditorFocus}
            onBlur={onEditorBlur}
          />
        </EditorWrapper>
      </div>
      {/* <MainButton buttonText="Next" /> */}
      {isContentValid ? null : <div>{state.question.contentErrorMsg}</div>}
    </Div>
  );
}

const Div = styled(AskBoxStyle)`
  .editorFocus {
    border-color: ${(props) => {
      console.log(props.contentErrorMsg);
      return props.contentErrorMsg
        ? 'hsl(358deg 68% 59%)'
        : 'hsl(206deg 90% 70%)';
    }};
    box-shadow: ${(props) => {
      return props.contentErrorMsg
        ? '0 0 0 4px hsl(0deg 46% 92%)'
        : '0 0 0 4px hsl(206deg 65% 91%)';
    }};
  }
`;
const EditorWrapper = styled(TagBoxStyle)``;
const EditorBox = styled(Editor)`
  height: 254.664px;
`;
export default TextEditor;
