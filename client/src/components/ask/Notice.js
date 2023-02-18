import styled from 'styled-components';
import { ReactComponent as NoticeIcon } from '../../assets/noticeIcon.svg';
import { NoticeStyle } from './AskStyle';
function Notice({ noticeTitle, noticeDesc }) {
  return (
    <AskPageSideNotice>
      <h5>{noticeTitle}</h5>
      <div>
        <div>
          <NoticeIcon />
        </div>
        <div>
          {noticeDesc.map((el, idx) => (
            <p key={idx}>{el}</p>
          ))}
        </div>
      </div>
    </AskPageSideNotice>
  );
}

const AskPageSideNotice = styled(NoticeStyle)``;

export default Notice;
