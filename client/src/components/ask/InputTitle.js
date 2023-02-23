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
    return isTitleValid;
  };

  useEffect(() => {
    validationTitle();
    console.log(isTitleValid);
  }, [state]);

  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <AskPageInput
          onChange={setTitleText}
          titleErrorMsg={state.question.titleErrorMsg}
        />
      </div>
      {isTitleValid ? null : <div>{state.question.titleErrorMsg}</div>}
      {/* <MainButton buttonText="Next" /> */}
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)`
  :focus {
    border-color: ${(props) => {
      return props.titleErrorMsg
        ? 'hsl(358deg 68% 59%)'
        : 'hsl(206deg 90% 70%)';
    }};
    box-shadow: ${(props) => {
      return props.titleErrorMsg
        ? '0 0 0 4px hsl(0deg 46% 92%)'
        : '0 0 0 4px hsl(206deg 65% 91%)';
    }};
  }
`;
export default Input;
