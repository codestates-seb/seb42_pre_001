import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import Loading from '../components/Loading';

const User = () => {
  const { id } = useParams();
  const [member, setMember] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = `${process.env.REACT_APP_API_URL}/members/${id}`;
  useEffect(() => {
    const getMember = async () => {
      try {
        const response = await axios.get(apiUrl);
        const { data } = response;
        setMember(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getMember();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <UserContainer>
      <LeftSidebar pageName="users" />
      <MyPageContentContainer className="MPC">
        <Main className="main">
          <UserInfoContainer>
            <UserImg
              src={`https://source.boringavatars.com/beam/25/${member.memberId}%20${member.name}?square`}
              alt="avatar"
            />
            <UserName>{member.name}</UserName>
          </UserInfoContainer>
          <ActContainer>Activity</ActContainer>
          <SubContainer>
            <SubContent>
              <Text2>Answers</Text2>
              <div className="answers">
                {member.answers && member.answers.length > 0 ? (
                  <div className="container">
                    {member.answers.map((answer, idx) => {
                      return (
                        <div key={idx}>
                          <div className="inner">
                            <Vote key={idx}>{answer.vote}</Vote>
                            <Text3>{answer.title}</Text3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <Text4>You have not answered any questions</Text4>
                )}
              </div>
            </SubContent>
            <SubContent>
              <Text2>Questions</Text2>
              <div className="questions">
                {member.questions && member.questions.length ? (
                  <div className="container">
                    {member.questions.map((question, idx) => {
                      return (
                        <div key={idx}>
                          <div className="inner">
                            <Vote>{question.vote}</Vote>
                            <Text3>{question.title}</Text3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <Text4>You have not asked any questions</Text4>
                )}
              </div>
            </SubContent>
          </SubContainer>
        </Main>
      </MyPageContentContainer>
    </UserContainer>
  );
};
export default User;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Main = styled.div`
  width: 100px;
  height: 100px;
`;
const MyPageContentContainer = styled.div`
  height: 100%;
  width: 1100px;
  display: flex;
  flex-direction: row;
  padding: 25px;
`;

const UserInfoContainer = styled.div`
  min-width: 950px;
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  padding: 15px;
`;

const UserImg = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin: 5px 0 15px 0;
`;
const UserName = styled.div`
  font-size: 40px;
  padding: 10px 0 0 20px;
`;
const ActContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  height: 30px;
  margin: 10px;
  padding: 8px 10px 10px 10px;
  font-size: 15px;
  border: 1px solid none;
  border-radius: 100px;
  color: white;
  background-color: #e67e22;
  cursor: pointer;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1000px;
  padding: 15px;

  .answers {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 450px;
    min-height: 150px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 5px;
    overflow: scroll;
  }
  .questions {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 450px;
    min-height: 150px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 5px;
    overflow: scroll;
  }
  .container {
    display: flex;
    flex-direction: column;
    .inner {
      display: flex;
    }
  }
`;
const SubContent = styled.div`
  div {
    display: flex;
    align-items: center;
    text-align: left;
    height: 25px;
    margin: 10px 10px 10px 5px;
  }
`;

const Text2 = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin: 0 0 5px 0;
`;
const Text4 = styled.label`
  display: block;
  width: 100%;
  color: hsl(210, 8%, 55%);
  text-align: center;
  margin-top: 65px;
`;
const Vote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 25px;
  padding: 5px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid hsl(210, 8%, 85%);
  margin: 0 20px 0 20px;
`;
const Text3 = styled.label`
  display: block;
  font-size: 15px;
  width: 280px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: hsl(210, 8%, 55%);
`;
