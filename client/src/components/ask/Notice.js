import styled from 'styled-components';
import { askTitle, askDesc } from '../../assets/askInputDesc';

function Notice() {
  return (
    <Div>
      <h5>{askTitle}</h5>
      {askDesc.map((el, idx) => (
        <p key={idx}>{el}</p>
      ))}
    </Div>
  );
}

const Div = styled.div`
  > h5 {
    margin: 0;
    padding: 10px;
    border-bottom: 1px solid;
  }
  > p {
    margin: 0;
    padding: 10px;
    background-color: white;
  }
  border: 1px solid;
  height: fit-content;
`;

export default Notice;
