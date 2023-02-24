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
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

function AskPageContents() {
  const [cookie] = useCookies();
  let { content, title, allTags, titleFocus, contentFocus, tagsFocus } =
    useSelector((state) => state.question);

  // let { id } = useSelector((state) => state.login);
  // title 255자, content) 50000자

  let requestBody = {
    content: content,
    title: title,
    memberId: 1,
    tags: allTags,
  };
  console.log(requestBody);

  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl);
  let postQuestion = async () => {
    await axios
      .post(`${apiUrl}/questions`, JSON.stringify(requestBody), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: cookie.accessToken,
          Refresh: cookie.refreshToken,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let isValid = () => {
    return (
      title?.length >= 15 &&
      content?.length &&
      allTags?.length &&
      allTags?.length <= 5
    );
  };

  useEffect(() => {
    isValid();
  }, [title, content, allTags]);
  console.log(isValid());

  return (
    <Main>
      <div>
        <div>
          <Top>
            <h1>Ask a public question</h1>
            <BgImg />
          </Top>
          <AskPageMainNotice />
        </div>
        <InputSet>
          <InputTitle quseiontTitle={ask.title} desc={ask.desc} />
          {titleFocus ? (
            <AskPageSideNotice
              noticeTitle={ask.noticeTitle}
              noticeDesc={ask.noticeDesc}
            />
          ) : null}
        </InputSet>
        <InputSet>
          <TextEditor title={body.title} desc={body.desc} />
          {contentFocus ? (
            <AskPageSideNotice
              noticeTitle={body.noticeTitle}
              noticeDesc={body.noticeDesc}
            />
          ) : null}
        </InputSet>
        <InputSet>
          <InputTags title={tags.title} desc={tags.desc} />
          {tagsFocus ? (
            <AskPageSideNotice
              noticeTitle={tags.noticeTitle}
              noticeDesc={tags.noticeDesc}
            />
          ) : null}
        </InputSet>
        <PostOrDiscardButtons>
          <MainButton
            buttonText="Post your question"
            functionHandler={postQuestion}
          ></MainButton>
          <Button>Discard draft</Button>
        </PostOrDiscardButtons>
        {!isValid() ? (
          <div>
            Your question couldn&apos;t be submitted. Please see the error
            above.
          </div>
        ) : null}
      </div>
    </Main>
  );
}

const Main = styled.div`
  padding: 0 24px 50px 24px;
  max-width: 1264px;
  flex-grow: 1;

  > div {
    min-height: 750px;
    overflow: visible;
  }
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
  position: relative;
  display: flex;
  width: 100%;
  row-gap: 16px;
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
