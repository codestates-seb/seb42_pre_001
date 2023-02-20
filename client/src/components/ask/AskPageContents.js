// title 에서만 받아오기
//axios 요청
import Input from './Input';
import TextEditor from './TextEditor';
import styled from 'styled-components';
import AskPageMainNotice from './AskPageMainNotice';
import AskPageSideNotice from './AskPageSideNotice';
import { ask, body, tags } from '../../assets/askInputDesc';
import { ReactComponent as Background } from '../../assets/background.svg';
import axios from 'axios';
import MainButton from '../MainButton';

function AskPageContents() {
  let postQuestion = async () => {
    await axios
      .post(
        'https://preproject-3ea3e-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json/-NOh832a6kJzFy-8ZFO2',
        JSON.stringify({
          answered: '',
          answers: [],
          asked: '2023-02-18 오전 9:12:76',
          author: '함소aaaaaaaapatch',
          contents: '되나?',
          modified: '',
          postId: 10005959404049,
          tage: ['new, post'],
          title: '이거',
          view: 300,
        })
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Main>
      <div>
        <Top>
          <h1>Ask a public question</h1>
          <BgImg />
        </Top>
        <AskPageMainNotice />
      </div>
      <InputSet>
        <Input title={ask.title} desc={ask.desc} />
        <AskPageSideNotice
          noticeTitle={ask.noticeTitle}
          noticeDesc={ask.noticeDesc}
        />
      </InputSet>
      <InputSet>
        <TextEditor title={body.title} desc={body.desc} />
        <AskPageSideNotice
          noticeTitle={body.noticeTitle}
          noticeDesc={body.noticeDesc}
        />
      </InputSet>
      {/* <InputSet>
        <TextEditor title={problem.title} desc={problem.desc} />
        <AskPageSideNotice
          noticeTitle={problem.noticeTitle}
          noticeDesc={problem.noticeDesc}
        />
      </InputSet> */}
      {/* <InputSet>
        <TextEditor title={tryAndExpect.title} desc={tryAndExpect.desc} />
        <AskPageSideNotice
          noticeTitle={tryAndExpect.noticeTitle}
          noticeDesc={tryAndExpect.noticeDesc}
        />
      </InputSet> */}
      <InputSet>
        <Input title={tags.title} desc={tags.desc} />
        <AskPageSideNotice
          noticeTitle={tags.noticeTitle}
          noticeDesc={tags.noticeDesc}
        />
      </InputSet>
      {/* <InputSet>
        <Input title={review.title} desc={review.desc} />
        <AskPageSideNotice
          noticeTitle={review.noticeTitle}
          noticeDesc={review.noticeDesc}
        />
      </InputSet> */}
      <PostOrDiscardButtons>
        <MainButton
          buttonText="Post your question"
          onClick={postQuestion}
        ></MainButton>
        <Button>Discard draft</Button>
      </PostOrDiscardButtons>
    </Main>
  );
}

const Main = styled.div`
  padding: 0 24px 24px 24px;
  max-width: 1240px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-weight: 700;
    font-size: 1.7rem;
    margin: 24px 0 27px;
    line-height: 1.3;
  }
`;

const BgImg = styled(Background)`
  width: 550px;
`;

const InputSet = styled.div`
  display: flex;
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Button = styled.button`
  border: none;
  color: hsl(358deg 62% 47%);
  padding: 10.4px;
  background-color: transparent;
  letter-spacing: 0.03rem;
  cursor: pointer;
  :hover {
    background-color: hsl(358deg 75% 97%);
  }
`;

const PostOrDiscardButtons = styled.div`
  display: flex;
`;

export default AskPageContents;
