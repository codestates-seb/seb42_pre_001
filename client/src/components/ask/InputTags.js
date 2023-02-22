import styled from 'styled-components';
// import MainButton from '../MainButton';
import { AskBoxStyle, InputStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTagsErrorMsg,
  setCurrentTag,
  setAllTags,
} from '../../slice/questionSlice';
import { useEffect } from 'react';
import { tags } from '../../assets/askInputDesc';
function InputTags() {
  let dispatch = useDispatch();
  let { currentTag, allTags, tagsErrorMsg } = useSelector(
    (state) => state.question
  );

  // Tags
  // let setTagsText = (e) => {
  //   dispatch(setTags(e.target.value));
  // };

  let isTagsValid = false;
  let validationTags = () => {
    if (!allTags?.length) {
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
    validationTags();
    console.log(allTags);
  }, [allTags]);

  let handleText = (e) => {
    dispatch(setCurrentTag(e.target.value));
  };

  // useEffect(() => {
  //   if (currentTag) {
  //     dispatch(setAllTags(currentTag));
  //   }
  // }, [aa]);

  let pushTag = (e) => {
    if (e.key === 'Enter') {
      // div 생성
      const $HashWrapOuter = document.querySelector('.HashWrapOuter');
      const $HashWrapInner = document.createElement('div');

      $HashWrapInner.textContent = currentTag;
      $HashWrapOuter.appendChild($HashWrapInner);
      dispatch(setAllTags(currentTag));
      dispatch(setCurrentTag(''));
    }
  };

  return (
    <Div>
      <div>
        <label>{tags.title}</label>
        <p>{tags.desc}</p>
        <div className="HashWrapOuter">
          <AskPageInput
            className="HashWrapInner"
            onKeyDown={pushTag}
            value={currentTag}
            onChange={handleText}
          />
        </div>
      </div>
      {isTagsValid ? null : <div>{tagsErrorMsg}</div>}
      {/* <MainButton buttonText="Next" /> */}
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)``;
export default InputTags;
