import styled from 'styled-components';
// import MainButton from '../MainButton';
import { AskBoxStyle, InputStyle, TagBoxStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTagsErrorMsg,
  setCurrentTag,
  setAllTags,
  setDeleteTag,
} from '../../slice/questionSlice';
import { useEffect } from 'react';
import { tags } from '../../assets/askInputDesc';

function InputTags() {
  let dispatch = useDispatch();
  let { currentTag, allTags, tagsErrorMsg } = useSelector(
    (state) => state.question
  );

  // 유효성 검사
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

  // 태그 삽입
  let pushTag = (e) => {
    if (
      e.key === 'Enter' &&
      !allTags.includes(currentTag) &&
      !currentTag.split('').every((el) => el === ' ')
    ) {
      // div 생성
      const hashTagOuter = document.querySelector('.HashWrapOuter');
      const hashTagInner = document.createElement('div');
      const tagText = document.createElement('div');
      const buttonWrap = document.createElement('button');

      //삭제 클릭 이벤트 생성
      buttonWrap.addEventListener('click', (e) => {
        e.stopPropagation();
        hashTagOuter?.removeChild(e.target.parentNode);
        dispatch(setDeleteTag(e.target.parentNode.children[0].textContent));
      });
      // svg 생성
      const svg = document.querySelector('svg');
      const buttonSvg = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      );
      buttonSvg.setAttribute('className', 'svg-icon iconClearSm pe-none');
      buttonSvg.setAttribute('width', '14');
      buttonSvg.setAttribute('height', '14');
      buttonSvg.setAttribute('viewBox', '0 0 14 14');
      svg.appendChild(buttonSvg);

      // path 생성
      const path = document.querySelector('path');
      const svgPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      svgPath.setAttribute(
        'd',
        'M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z'
      );
      svgPath.setAttribute('fill', 'black');
      path.appendChild(svgPath);

      //append
      tagText.textContent = currentTag;
      hashTagOuter.appendChild(hashTagInner);
      hashTagInner.appendChild(tagText);
      hashTagInner.appendChild(buttonWrap);
      buttonWrap.appendChild(buttonSvg);
      buttonSvg.appendChild(svgPath);

      dispatch(setAllTags(currentTag));
      dispatch(setCurrentTag(''));
    }
  };

  return (
    <Div>
      <div>
        <label>{tags.title}</label>
        <p>{tags.desc}</p>
        <HashTagWrapper className="HashTagWrapper">
          <AskPageInput
            onKeyPress={pushTag}
            value={currentTag}
            onChange={handleText}
          />
          <Outer className="HashWrapOuter">
            {/* <div className="HashWrapInner">
              <div>태그</div>
              <button>
                <svg
                  className="svg-icon iconClearSm pe-none"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path>
                </svg>
              </button>
            </div> */}
          </Outer>
        </HashTagWrapper>
      </div>
      {isTagsValid ? null : <div>{tagsErrorMsg}</div>}
      {/* <MainButton buttonText="Next" /> */}
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;

const AskPageInput = styled(InputStyle)`
  border: none;
  padding: 0;
  :focus {
    border: none;
    box-shadow: none;
  }
`;

const HashTagWrapper = styled(TagBoxStyle)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      white-space: nowrap;
    }
    button {
      display: flex;
      margin: 0;
    }
    svg {
      pointer-events: none;
    }
  }
`;

export default InputTags;
