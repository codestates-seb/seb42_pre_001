import Section from '../components/signup/Section';
import SignUpContainer from '../components/signup/SignUpContainer';
import styled from 'styled-components';
import Complete from '../components/signup/complete';
import { useSelector } from 'react-redux';
const Conatiner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// https://stackoverflow.com/users/login 경로
export default function Sign() {
  const state = useSelector((state) => {
    return state;
  });

  return (
    <>
      {!state.signUp.isSubmit ? (
        <Conatiner>
          <Section></Section> <SignUpContainer></SignUpContainer>
        </Conatiner>
      ) : (
        <Conatiner>
          <Complete></Complete>
        </Conatiner>
      )}
    </>
  );
}
