import styled from 'styled-components';
import { mainNotice } from '../../assets/askInputDesc';
function AskPageMainNotice() {
  const { title, desc, stepsDetail } = mainNotice;
  return (
    <Div>
      <h2>{title}</h2>
      <div>
        {desc.map((el, idx) => (
          <p key={idx}>{el}</p>
        ))}
        <h5>Steps</h5>
        <ul>
          {stepsDetail.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      </div>
    </Div>
  );
}
export default AskPageMainNotice;

const Div = styled.div`
  background-color: hsl(206deg 67% 95%);
  border: 1px solid hsl(206deg 66% 79%);
  border-radius: 3px;
  padding: 24px;
  margin: 16px 0;
  color: hsl(210deg 8% 25%);
  width: 70%;
  > h2 {
    font-weight: 500;
    font-size: 1.3rem;
    letter-spacing: 0.03rem;
    margin-bottom: 8px;
    line-height: 1.3;
  }
  h5 {
    margin: 15px 0 8px 0;
  }
  li {
    margin-left: 30px;
    font-size: 0.9rem;
  }
`;
