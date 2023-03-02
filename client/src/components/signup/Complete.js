import { BsCheckLg } from 'react-icons/bs';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Conatiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  min-width: 450px;
  width: 530px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hsl(140, 40%, 90%);
  border: 2px solid hsl(140, 40%, 75%);
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 25px;
`;
const Paragraph = styled.p`
  margin: 10px 0 0 0;
  font-size: 18px;
  padding-right: 30px;
`;
const Text2 = styled.div`
  font-size: 14px;
  margin: 10px 25px 5px 70px;
  line-height: 18px;
`;

export default function FindPass() {
  const state = useSelector((state) => {
    return state;
  });
  return (
    <Conatiner>
      <Content>
        <Text>
          <BsCheckLg size="50" color="#27ae60"></BsCheckLg>ㅤ
          <Paragraph>
            Registration email sent to {state.signUp.email} Open this email to
            finish signup.
          </Paragraph>
        </Text>

        <Text2>
          If you don’t see this email in your inbox within 15 minutes, look for
          it in your junk mail folder. If you find it there, please mark the
          email as “Not Junk”.
        </Text2>
      </Content>
    </Conatiner>
  );
}
