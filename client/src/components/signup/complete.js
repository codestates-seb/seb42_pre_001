import { BsCheckLg } from 'react-icons/bs';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// 컴포넌트  묶음
const Conatiner = styled.div`
  min-width: 850px;
  width: 850px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hsl(140, 40%, 90%);
  border: 2px solid hsl(140, 40%, 75%);
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin: 10px 0 0 25px;
`;
const Paragraph = styled.p`
  margin: 10px 0 0 0;
  font-size: 30px;
  line-height: 35px;
`;
const Text2 = styled.div`
  font-size: 22px;
  margin: 15px 20px 5px 94px;
  line-height: 35px;
`;

export default function Complete() {
  const state = useSelector((state) => {
    return state;
  });
  return (
    <Conatiner>
      <Text>
        <BsCheckLg size="50" color="#27ae60"></BsCheckLg>ㅤ
        <Paragraph>
          Registration email sent to {state.signUp.email} Open this email to
          finish signup.
        </Paragraph>
      </Text>

      <Text2>
        If you don’t see this email in your inbox within 15 minutes, look for it
        in your junk mail folder. If you find it there, please mark the email as
        “Not Junk”.
      </Text2>
    </Conatiner>
  );
}
