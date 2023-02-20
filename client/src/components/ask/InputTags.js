import styled from 'styled-components';
// import MainButton from '../MainButton';
import { AskBoxStyle, InputStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setTagsErrorMsg, setTags } from '../../slice/questionSlice';
import { useEffect } from 'react';
import { tags } from '../../assets/askInputDesc';
function InputTags() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);

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
    validationTags();
  }, [state]);

  return (
    <Div>
      <div>
        <label>{tags.title}</label>
        <p>{tags.desc}</p>
        <AskPageInput onChange={setTagsText} />
      </div>
      {isTagsValid ? null : <div>{state.question.tagsErrorMsg}</div>}
      {/* <MainButton buttonText="Next" /> */}
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)``;
export default InputTags;
