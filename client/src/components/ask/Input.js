import styled from 'styled-components';
function Input({ inputTitle, inputDesc }) {
  return (
    <Div>
      <h4>{inputTitle}</h4>
      <p>{inputDesc}</p>
      <input />
    </Div>
  );
}

const Div = styled.div`
  border: 1px solid black;
  background-color: white;
`;

export default Input;
