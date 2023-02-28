import styled from 'styled-components';
// import MainButton from '../MainButton';
import { AskBoxStyle, InputStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTitle,
  setTitleFocus,
  setIsDiscard,
} from '../../slice/questionSlice';
import { useEffect, useState, useRef } from 'react';
function Input({ quseiontTitle, desc = null, defaultValue }) {
  let [titleErrorMsg, setTitleErrorMsg] = useState(null);
  let { title, isDiscard } = useSelector((state) => state.question);
  let dispatch = useDispatch();
  let setTitleText = (e) => {
    dispatch(setTitle(e.target.value));
  };

  // 유효성 검사
  let isTitleValid = false;
  let validationTitle = () => {
    if (!title?.length) {
      isTitleValid = false;
      setTitleErrorMsg('Title is missing.');
    } else if (title?.length < 15) {
      isTitleValid = false;
      setTitleErrorMsg('Title must be at least 15 characters.');
    } else {
      isTitleValid = true;
      setTitleErrorMsg(''); // 이거 없으면 왜 안되지
    }
  };
  const inputTitleEl = useRef(null);
  const resetInputTitle = () => {
    inputTitleEl.current.textContent = '';
    dispatch(setIsDiscard(false));
  };
  useEffect(() => validationTitle(), [title]);
  useEffect(() => {
    if (isDiscard) {
      resetInputTitle();
    }
  }, [isDiscard]);
  //focus 상태 변경
  const onTitleFocus = () => {
    dispatch(setTitleFocus(true));
  };
  const onTitleBlur = () => {
    dispatch(setTitleFocus(false));
  };

  return (
    <Div>
      <div>
        <label>{quseiontTitle}</label>
        <p>{desc}</p>
        <AskPageInput
          defaultValue={defaultValue}
          onChange={setTitleText}
          titleErrorMsg={titleErrorMsg}
          onFocus={onTitleFocus}
          onBlur={onTitleBlur}
          ref={inputTitleEl}
        />
      </div>
      {isTitleValid ? null : <div>{titleErrorMsg}</div>}
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
