// title 에서만 받아오기
//axios 요청
import InputTitle from './InputTitle';
import InputTags from './InputTags';
import TextEditor from './TextEditor';
import styled from 'styled-components';
import AskPageMainNotice from './AskPageMainNotice';
import AskPageSideNotice from './AskPageSideNotice';
import { ask, body, tags } from '../../assets/askInputDesc';
import { ReactComponent as Background } from '../../assets/background.svg';
import axios from 'axios';
import MainButton from '../MainButton';
import { useSelector } from 'react-redux';
function AskPageContents() {
  let { content, title } = useSelector((state) => state.question);

  // let { id } = useSelector((state) => state.login);
  console.log(title); // 255자
  console.log(content); // 1000자

  let postQuestion = async (e) => {
    console.log(e.target);
    await axios
      .post(
        'http://localhost:8080/questions',
        JSON.stringify({
          content: content,
          title: title,
          memberId: 1,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
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
        <InputTitle title={ask.title} desc={ask.desc} />
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
      <InputSet>
        <InputTags title={tags.title} desc={tags.desc} />
        <AskPageSideNotice
          noticeTitle={tags.noticeTitle}
          noticeDesc={tags.noticeDesc}
        />
      </InputSet>
      <PostOrDiscardButtons>
        <MainButton
          buttonText="Post your question"
          functionHandler={postQuestion}
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
