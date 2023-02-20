import styled from 'styled-components';
// import MainButton from '../MainButton';
import { AskBoxStyle, InputStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTitle,
  setTitleErrorMsg,
  setTagsErrorMsg,
  setTags,
} from '../../slice/questionSlice';
import { useEffect } from 'react';

function Input({ title, desc }) {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  // Title
  let setTitleText = (e) => {
    dispatch(setTitle(e.target.value));
  };

  let isTitleValid = false;
  let validationTitle = () => {
    if (!state.question.title?.length) {
      isTitleValid = false;
      dispatch(setTitleErrorMsg('Title is missing.'));
    } else if (state.question.title?.length < 15) {
      isTitleValid = false;
      dispatch(setTitleErrorMsg('Title must be at least 15 characters.'));
    } else {
      isTitleValid = true;
      dispatch(setTitleErrorMsg('')); // 이거 없으면 왜 안되지
    }
  };

  // Tags
  let setTagsText = (e) => {
    dispatch(setTags(e.target.value));
  };

  let isTagsValid = false;
  let validationTags = () => {
    if (!state.question.tags?.length) {
      isTagsValid = false;
      dispatch(
        setTagsErrorMsg(
          'Please enter at least one tag; see a list of popular tags.'
        )
      );
    } else {
      isTagsValid = true;
      dispatch(setTagsErrorMsg('')); // 이거 없으면 왜 안되지
    }
  };

  useEffect(() => {
    validationTitle();
    validationTags();
  }, [state]);

  let setText = title === 'Title' ? setTitleText : setTagsText;
  let isValid = title === 'Title' ? isTitleValid : isTagsValid;
  let errorMsg =
    title === 'Title'
      ? state.question.titleErrorMsg
      : state.question.tagsErrorMsg;

  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <AskPageInput onChange={setText} />
      </div>
      {isValid ? null : <div>{errorMsg}</div>}
      {/* <MainButton buttonText="Next" /> */}
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)``;
export default Input;
