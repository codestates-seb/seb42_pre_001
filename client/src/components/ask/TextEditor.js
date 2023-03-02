import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import { AskBoxStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  setContent,
  setContentFocus,
  setDiscardEditor,
} from '../../slice/questionSlice';
import { setContent as setAContent } from '../../slice/answerSlice';
function TextEditor({ title, desc = null, initialValue = '' }) {
  let editorRef = useRef(null);
  let dispatch = useDispatch();
  let [contentErrorMsg, setContentErrorMsg] = useState(null);
  let { content } =
    title === 'Body'
      ? useSelector((state) => state.question)
      : useSelector((state) => state.answer);
  let { contentFocus, discardEditor } = useSelector((state) => state.question);

  let setContentText = () => {
    title === 'Body'
      ? dispatch(setContent(editorRef.current?.getInstance().getMarkdown()))
      : dispatch(setAContent(editorRef.current?.getInstance().getMarkdown()));
  };

  // 유효성 검사
  let isContentValid = false;
  let validationContent = () => {
    if (!content?.length) {
      isContentValid = false;
      setContentErrorMsg('Body is missing.');
    } else if (content?.length < 30) {
      isContentValid = false;
      setContentErrorMsg('Body must be at least 30 characters.');
    } else {
      isContentValid = true;
      setContentErrorMsg(''); // 이거 없으면 왜 안되지
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

  const resetEditor = () => {
    editorRef.current?.getInstance().reset();
    dispatch(setDiscardEditor(false));
  };
  useEffect(() => {
    if (discardEditor) {
      resetEditor();
    }
  }, [discardEditor]);

  return (
    <Div
      contentErrorMsg={contentErrorMsg}
      contentFocus={contentFocus}
      desc={desc}
    >
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <EditorBox
          previewStyle="tab"
          initialEditType="markdown"
          hideModeSwitch={true}
          useCommandShortcut={true}
          ref={editorRef}
          onKeyup={setContentText}
          onFocus={onEditorFocus}
          onBlur={onEditorBlur}
          initialValue={initialValue}
        />
      </div>
      {/* <MainButton buttonText="Next" /> */}
      {isContentValid ? null : <div>{contentErrorMsg}</div>}
    </Div>
  );
}

const Div = styled(AskBoxStyle)`
  ${(props) =>
    props.desc
      ? '.toastui-editor-defaultUI'
      : '.toastui-editor-main-container'} {
    border-width: 1px;
    border-style: solid;
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
  }

  .toastui-editor-main-container {
    border: ${(props) => {
      if (!props.contentFocus) return 'none';
    }};
  }
`;

const EditorBox = styled(Editor)`
  height: 254.664px;
`;
export default TextEditor;
