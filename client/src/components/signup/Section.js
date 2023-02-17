import styled from 'styled-components';

import unlock from '../../assets/unlock.png';
import save from '../../assets/save.png';
import get from '../../assets/get.png';
import earn from '../../assets/earn.png';

export default function Section() {
  return (
    <Conatiner>
      <Title>Join the Stack Overflow community</Title>
      <Text>
        <Image src={get} /> Get unstuck — ask a question
      </Text>
      <Text>
        <Image src={unlock} />
        Unlock new privileges like voting and commenting
      </Text>
      <Text>
        <Image src={save} />
        Save your favorite tags, filters, and jobs
      </Text>
      <Text>
        <Image src={earn} />
        Earn reputation and badges
      </Text>
      <Text2>
        Collaborate and share knowledge with a private group for FREE. Get Stack
        Overflow for Teams free for up to 50 users.
      </Text2>
    </Conatiner>
  );
}

// Styled Componetns

// 컴포넌트  묶음
const Conatiner = styled.div`
  min-height: 700px;
  min-height: 600px;
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
`;

// 제목
const Title = styled.div`
  font-size: 41px;
  margin-left: 40px;
`;

// 텍스트
const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  margin: 30px 0 0 50px;
`;

// 텍스트2
const Text2 = styled.div`
  font-size: 22px;
  margin: 40px;
`;

// 이미지
const Image = styled.img`
  width: 50px;
  height: 50px;
`;
