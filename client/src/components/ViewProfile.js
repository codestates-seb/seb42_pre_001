import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';

const ViewProfile = ({ from, id, name, createdAt }) => {
  return (
    <UserContiner>
      <UserWrapper>
        <Time>
          {from === 'question' ? 'asked ' : 'answered '}
          {createdAt ? createdAt : Date().toLocaleString().slice(0, -18)}
        </Time>
        <UserWrapperBottom>
          <Image
            src={`https://source.boringavatars.com/beam/25/${id}%20?square`}
            alt="avatar"
          />
          <NameContainer>
            <Name>{name}</Name>
            <NameWrapperBottom>
              <FirstNum>{id * 2 + 100}</FirstNum>
              <Circle />
              <LastNum>{id}</LastNum>
            </NameWrapperBottom>
          </NameContainer>
        </UserWrapperBottom>
      </UserWrapper>
    </UserContiner>
  );
};
export default ViewProfile;

const UserContiner = styled.div`
  display: flex;
  justify-content: right;
`;
const UserWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-self: right;
  background-color: hsl(205deg 46% 92%);
  border-radius: 3px;
`;
const UserWrapperBottom = styled.div`
  display: flex;
`;
const NameContainer = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;
const NameWrapperBottom = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 32px;
  height: 32px;
`;
const Name = styled.div`
  color: hsl(206deg 100% 40%);
  font-size: 13px;
  cursor: pointer;
  :hover {
    color: hsl(206deg 100% 52%);
  }
`;
const Time = styled.div`
  margin: 2px 0px 4px 0px;
  font-size: 12px;
  color: hsl(210deg 8% 45%);
`;
const FirstNum = styled.div`
  margin-right: 2px;
  font-size: 12px;
  color: hsl(210deg 8% 45%);
  font-weight: 600;
`;
const LastNum = styled.div`
  font-size: 12px;
  color: hsl(210deg 8% 55%);
`;
const Circle = styled(FaCircle)`
  width: 6px;
  margin: 0px 2px;
  align-self: center;
  color: hsl(27deg 90% 50%);
`;
