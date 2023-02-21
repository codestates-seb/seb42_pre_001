import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AnswerContent from '../components/answer/AnswerContent';
import AnswerCount from '../components/answer/AnswerCount';
import CreateAnswer from '../components/answer/CreateAnswer';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import QuestionSidebar from '../components/inquiry/QuestionSidebar';
import QuestionContent from '../components/question/QuestionContent';
import QuestionTitle from '../components/question/QuestionTitle';
import ViewTags from '../components/ViewTags';

const Answers = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const getQuestions = async () => {
      const response = await axios.get(apiUrl);
      const { data } = response;
      setQuestion(data[Number(id) - 1]);
    };
    getQuestions();
  }, [question]);
  return (
    <>
      <Container>
        <LeftSidebar />
        <ContentContainer>
          <QuestionTitle title={question.title} />
          <ContentWrapper>
            <ViewContent>
              <QuestionContent
                contents={question.contents}
                author={question.author}
              />
              <AnswerContainer>
                {question.answers ? (
                  <>
                    <AnswerCount length={question.answers.length} />
                    {question.answers.map((el, idx) => (
                      <AnswerContent key={idx} answer={el} />
                    ))}
                  </>
                ) : (
                  <QuestionBottom>
                    {`Know someone who can answer?Share a link to this `}
                    <QuestionBottomAsk>{`question`}</QuestionBottomAsk>
                    {` via `} <QuestionBottomAsk>{`email`}</QuestionBottomAsk>
                    {`,`}
                    <QuestionBottomAsk>{`Twitter`}</QuestionBottomAsk>
                    {`, or `}{' '}
                    <QuestionBottomAsk>{`Facebook`}</QuestionBottomAsk>
                    {`.`}
                  </QuestionBottom>
                )}
                <CreateAnswer question={question} />
                <QuestionBottom>
                  {`Not the answer you're looking for? Browse other questions tagged `}
                  <ViewTags />
                  {` or `}
                  <QuestionBottomAsk>{`ask your own question`}</QuestionBottomAsk>
                  {`.`}
                </QuestionBottom>
              </AnswerContainer>
            </ViewContent>
            <QuestionSidebar />
          </ContentWrapper>
        </ContentContainer>
      </Container>
    </>
  );
};
export default Answers;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ViewContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswerContainer = styled.div`
  padding-top: 10px;
`;
const QuestionBottom = styled.span`
  margin-top: 15px;
  font-size: 17px;
`;
const QuestionBottomAsk = styled.span`
  margin-top: 15px;
  font-size: 17px;
  color: hsl(206deg 100% 40%);
  cursor: pointer;
  :hover {
    color: hsl(206deg 100% 52%);
  }
  :visited {
    text-decoration: none;
  }
`;
