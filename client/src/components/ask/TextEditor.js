import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { AskBoxStyle, TagBoxStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  setContent,
  setContentErrorMsg,
  setContentFocus,
} from '../../slice/questionSlice';

function TextEditor({ title, desc }) {
  let { content, contentErrorMsg, contentFocus } = useSelector(
    (state) => state.question
  );
  let editorRef = useRef(null);
  let dispatch = useDispatch();
  let setContentText = () => {
    dispatch(setContent(editorRef.current?.getInstance().getMarkdown()));
    // console.log(editorRef.current?.getInstance().getHTML());
  };

  // 유효성 검사
  let isContentValid = false;
  let validationContent = () => {
    if (!content?.length) {
      isContentValid = false;
      dispatch(setContentErrorMsg('Body is missing.'));
    } else {
      isContentValid = true;
      dispatch(setContentErrorMsg('')); // 이거 없으면 왜 안되지
    }
  };

  useEffect(() => validationContent(), [content]);

  // focus 상태 변경
  const onEditorFocus = () => {
    dispatch(setContentFocus(true));
  };
  const onEditorBlur = () => {
    dispatch(setContentFocus(false));
  };

  return (
    <Div contentErrorMsg={contentErrorMsg}>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <EditorWrapper
          contentErrorMsg={contentErrorMsg}
          contentFocus={contentFocus}
        >
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
      {isContentValid ? null : <div>{contentErrorMsg}</div>}
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;
const EditorWrapper = styled(TagBoxStyle)`
  border-color: ${(props) => {
    if (props.contentFocus) {
      return props.contentErrorMsg
        ? 'hsl(358deg 68% 59%)'
        : 'hsl(206deg 90% 70%)';
    }
  }};
  box-shadow: ${(props) => {
    if (props.contentFocus) {
      return props.contentErrorMsg
        ? '0 0 0 4px hsl(0deg 46% 92%)'
        : '0 0 0 4px hsl(206deg 65% 91%)';
    }
  }};
`;
const EditorBox = styled(Editor)`
  height: 254.664px;
`;
export default TextEditor;
