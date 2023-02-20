import styled from 'styled-components';
// import MainButton from '../MainButton';
import { AskBoxStyle, InputStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setTitleErrorMsg } from '../../slice/questionSlice';
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

  useEffect(() => {
    validationTitle();
  }, [state]);

  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <AskPageInput onChange={setTitleText} />
      </div>
      {isTitleValid ? null : <div>{state.question.titleErrorMsg}</div>}
      {/* <MainButton buttonText="Next" /> */}
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)``;
export default Input;
