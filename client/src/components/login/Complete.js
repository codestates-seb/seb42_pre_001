import { BsCheckLg } from 'react-icons/bs';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// 컴포넌트  묶음
const Conatiner = styled.div`
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
  margin: 10px 25px 5px 62px;
  line-height: 18px;
`;

export default function FindPass() {
  const state = useSelector((state) => {
    return state;
  });
  return (
    <Conatiner>
      <Text>
        <BsCheckLg size="25" color="#27ae60"></BsCheckLg>ㅤ
        <Paragraph>
          Account recovery email sent to {state.login.emailForPass}
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
