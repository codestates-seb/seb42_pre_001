import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const UserItem = ({ user }) => {
  const navigate = useNavigate();
  const arr = [
    'France',
    'Republic of Korea',
    'Italy',
    'United Kingdom',
    'USA',
    'Japan',
    'Australia',
    'Germany',
  ];

  return (
    <UserContiner>
      <ImageWrapper
        src={`https://source.boringavatars.com/beam/25/${user.memberId}%20?square`}
        alt="avatar"
      />
      <ContentContainer>
        <Name onClick={() => navigate(`/users/${user.memberId}/${user.name}`)}>
          {user.name}
        </Name>
        <Location>{arr[Number(user.memberId) % 8]}</Location>
        <Nums>{Number(user.memberId) * 3 + 50}</Nums>
      </ContentContainer>
    </UserContiner>
  );
};
export default UserItem;

const UserContiner = styled.div`
  width: 250px;
  padding: 5px 6px 7px 7px;
  margin: 0px 12px 12px 0px;
  display: flex;
`;
const ImageWrapper = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 3px;
`;
const ContentContainer = styled.div`
  margin-left: 9px;
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  font-size: 15px;
  color: hsl(206deg 100% 40%);
  cursor: pointer;
  :hover {
    color: hsl(206deg 100% 52%);
  }
`;
const Location = styled.div`
  font-size: 12px;
  color: hsl(210deg 8% 45%);
`;
const Nums = styled.div`
  font-size: 13px;
  color: hsl(210deg 8% 45%);
  font-weight: 600;
`;
