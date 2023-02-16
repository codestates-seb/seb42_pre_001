import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuestionListTop = ({ name }) => {
  return (
    <QuestionListTopContainer>
      <span className="title">{name}</span>
      <AskLink to="/question/ask">
        <button className="btn-ask">Ask Question</button>
      </AskLink>
    </QuestionListTopContainer>
  );
};

export default QuestionListTop;

const QuestionListTopContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
  .title {
    font-size: 27px;
  }
`;
const AskLink = styled(Link)`
  text-decoration: none;
  display: flex;

  .btn-ask {
    align-items: center;
    border-style: none;
    border-radius: 5%;
    background-color: hsl(206deg 100% 52%);
    color: white;
    padding: 10px;
    height: 40px;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
