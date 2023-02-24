import styled from 'styled-components';
import { AskBoxStyle, InputStyle, TagBoxStyle, HashTags } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  setAllTags,
  setDeleteTag,
  setTagsFocus,
} from '../../slice/questionSlice';
import { tags } from '../../assets/askInputDesc';
function InputTags() {
  let [currentTag, setCurrentTag] = useState('');
  let [tagsErrorMsg, setTagsErrorMsg] = useState(null);
  let dispatch = useDispatch();
  let { allTags, tagsFocus } = useSelector((state) => state.question);

  // 유효성 검사
  let isTagsValid = false;
  let validationTags = () => {
    if (!allTags?.length) {
      isTagsValid = false;

      setTagsErrorMsg(
        'Please enter at least one tag; see a list of popular tags.'
      );
    } else if (allTags.length > 5) {
      setTagsErrorMsg('Please enter no more than 5 tags.');
    } else {
      isTagsValid = true;
      setTagsErrorMsg(''); // 이거 없으면 왜 안되지
    }
  };

  useEffect(() => validationTags(), [allTags]);

  let handleText = (e) => {
    setCurrentTag(e.target.value);
  };

  // 태그 삽입
  let pushTag = (e) => {
    if (
      e.key === 'Enter' &&
      !allTags.includes(currentTag) &&
      !currentTag.split('').every((el) => el === ' ')
    ) {
      // element 생성
      const hashTagOuter = document.querySelector('.hashTags');
      const hashTagInput = document.querySelector('.hashTagInput');
      const hashTag = document.createElement('span');
      const tagText = document.createElement('span');
      const buttonWrap = document.createElement('button');
      tagText.textContent = currentTag;

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
      hashTag.appendChild(tagText);
      hashTag.appendChild(buttonWrap);
      buttonWrap.appendChild(buttonSvg);
      buttonSvg.appendChild(svgPath);
      hashTagInput.before(hashTag);
      dispatch(setAllTags(currentTag));
      setCurrentTag('');
    }
  };

  // focus 상태 변경
  const onTagsFocus = () => {
    dispatch(setTagsFocus(true));
  };
  const onTagsBlur = () => {
    dispatch(setTagsFocus(false));
  };

  return (
    <Div>
      <div>
        <label>{tags.title}</label>
        <p>{tags.desc}</p>
        <HashTagsWrapper tagsErrorMsg={tagsErrorMsg} tagsFocus={tagsFocus}>
          <HashTags className="hashTags">
            {/* <span>             //hashTag
              <span>태그 내용</span>    //tagText
              <button>                //buttonWrap
                <svg>                    //buttonSvg
                  <path />               // buttonPath
                </svg>
              </button>
            </span> */}
            <HashTagInput
              className="hashTagInput"
              onKeyPress={pushTag}
              value={currentTag}
              onChange={handleText}
              onFocus={onTagsFocus}
              onBlur={onTagsBlur}
            />
          </HashTags>
        </HashTagsWrapper>
      </div>
      {isTagsValid ? null : <div>{tagsErrorMsg}</div>}
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;

const HashTagsWrapper = styled(TagBoxStyle)`
  padding: 2px 9.1px 2px 2px;
  min-height: 37px;
  height: auto;
  white-space: normal;
  border-color: ${(props) => {
    if (props.tagsFocus) {
      return props.tagsErrorMsg ? 'hsl(358deg 68% 59%)' : 'hsl(206deg 90% 70%)';
    }
  }};
  box-shadow: ${(props) => {
    if (props.tagsFocus) {
      return props.tagsErrorMsg
        ? '0 0 0 4px hsl(0deg 46% 92%)'
        : '0 0 0 4px hsl(206deg 65% 91%)';
    }
  }};
`;

const HashTagInput = styled(InputStyle)`
  width: 85px;
  flex-grow: 1;
  border: none;
  color: hsl(210deg 8% 5%);
  background-color: transparent;
  :focus {
    border: none;
    box-shadow: none;
  }
`;

export default InputTags;
