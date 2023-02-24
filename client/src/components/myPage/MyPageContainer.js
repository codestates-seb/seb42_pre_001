import LeftSidebar from '../inquiry/LeftSidebar';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPencilFill } from 'react-icons/bs';
import { useState, useRef } from 'react';
import CreateAboutMe from './CreateAboutMe';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { setDisplayName, setTitle, setLocation } from '../../slice/myInfoSlice';

export default function Mypage() {
  const checkBox = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const [page, setPage] = useState('act');
  const [isChecked, setIsChecked] = useState(null);
  const [cookie] = useCookies();

  const deleteContent1 = ` Before confirming that you would like your profile deleted,
 we'd like to take a moment to explain the implications of deletion:`;

  const deleteContent2 = `Deletion is irreversible, and you will have no way
 to regain any of your original content, should this deletion
 be carried out and you change your mind later on. `;

  const deleteContent3 = `Your questions and answers will remain on the site, but will be
 disassociated and anonymizedand will not indicate your
 authorship even if you later return to the site. `;

  const deleteContent4 = ` Confirming deletion will only delete your profile on Stack Overflow - it
   will not affect any of your other profiles on the Stack
   Exchange network. If you want to delete multiple profiles,
   you'll need to visit each site separately and request deletion
   of those individual profiles.`;

  const deleteContent5 = `I have read the information stated above and understand the implications of having my profile deleted. I wish to proceed with the deletion of my profile.`;

  // 회원 삭제 구현
  // 삭제 버튼 클릭
  const userDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/members`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: cookie.accessToken,
            Refresh: cookie.refreshToken,
          },
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(state);
  // 저장 버튼 클릭
  const saveHandler = () => {
    setPage('act');
    // updateUserInfo()
  };
  // 취소 버튼 클릭
  const cancelHandler = () => {
    setPage('act');
  };

  // input value를 state로 저장
  const titleHandler = (e) => {
    dispatch(setTitle(e.target.value));
  };

  // input value를 state로 저장
  const displayNameHandler = (e) => {
    dispatch(setDisplayName(e.target.value));
  };

  // input value를 state로 저장
  const locationHandler = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const movePage = (e) => {
    setPage(e.target.id);
  };

  // 체크박스 클릭
  const checkboxHandler = () => {
    setIsChecked(checkBox.current.checked);
  };

  return (
    <HomeContainer className="home">
      <LeftSidebar></LeftSidebar>
      <MyPageContentContainer className="MPC">
        <Main className="main">
          <UserInfoContainer>
            {/* <UserImg src={state.img} alt="pic" /> */}
            <UserImg
              src="http://dn.joongdo.co.kr/mnt/images/file/2019y/04m/11d/2019041101001268900052661.jpg"
              alt="pic"
            />
            <UserName>{state.login.userInfo.name}</UserName>
            <EditBtn id="set" onClick={movePage}>
              <BsFillPencilFill id="set" size={12}></BsFillPencilFill>
              <Text id="set">Edit profile</Text>
            </EditBtn>
          </UserInfoContainer>
          <UlContainer>
            <ActContainer page={page}>
              <li role="presentation" id="act" onClick={movePage}>
                Activity
              </li>
            </ActContainer>
            <SetContainer page={page}>
              <li role="presentation" id="set" onClick={movePage}>
                Settings
              </li>
            </SetContainer>
          </UlContainer>
          {page === 'act' ? (
            <SubContainer>
              <SubContent>
                <Text2>Answers</Text2>
                <div className="answers">
                  {state.login.userInfo.answers ? (
                    <div className="container">
                      {state.login.userInfo.answers &&
                        state.login.userInfo.answers.map((answer, idx) => {
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
                  {state.login.userInfo.questions ? (
                    <div className="container">
                      {state.login.userInfo.questions &&
                        state.login.userInfo.questions.map((question, idx) => {
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
          ) : (
            <div className='"SettingDiv"'>
              <SettingsTitle>Edit your profile</SettingsTitle>
              <SettingsSubTitle>Public information</SettingsSubTitle>
              <PublicInfoConatiner className="public">
                <Text5>Profile image</Text5>
                <UserImg
                  src="http://dn.joongdo.co.kr/mnt/images/file/2019y/04m/11d/2019041101001268900052661.jpg"
                  alt="pic"
                />
                <Text5>Display name</Text5>
                <Input onChange={displayNameHandler}></Input>
                <Text5>Location</Text5>
                <Input onChange={locationHandler}></Input>
                <Text5>Title</Text5>
                <Input onChange={titleHandler}></Input>
                <Text5>About me</Text5>
                <CreateAboutMe></CreateAboutMe>

                <BtnContainer>
                  <SaveBtn onClick={saveHandler}>Save profile</SaveBtn>
                  <CancelBtn onClick={cancelHandler}>Cancel</CancelBtn>
                </BtnContainer>
                <SettingsTitle>Delete Profile</SettingsTitle>
                <Text6>{deleteContent1}</Text6>
                <TextContainer>
                  <Dot> •</Dot>
                  <Text7>{deleteContent2}</Text7>
                </TextContainer>
                <TextContainer>
                  <Dot> •</Dot>
                  <Text7>{deleteContent3}</Text7>
                </TextContainer>

                <Text6>{deleteContent4}</Text6>
                <TextContainer>
                  <Checkbox
                    ref={checkBox}
                    type="checkbox"
                    value="null"
                    onClick={checkboxHandler}
                  ></Checkbox>
                  <Text6>{deleteContent5}</Text6>
                </TextContainer>
                {isChecked ? (
                  <DeleteBtn
                    onClick={userDelete}
                    type="button"
                    value="Delete profile"
                  ></DeleteBtn>
                ) : (
                  <DeleteBtn
                    disabled
                    type="button"
                    value="Delete profile"
                  ></DeleteBtn>
                )}
              </PublicInfoConatiner>
            </div>
          )}
        </Main>
      </MyPageContentContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 1800px;
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
  width: calc(100% - 164px);
  display: flex;
  flex-direction: row;
  padding: 25px;
`;

const UserInfoContainer = styled.div`
  min-width: 1000px;
  display: grid;

  grid-template-columns: 1fr 12fr 1fr;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const UlContainer = styled.div`
  display: flex;
`;

const ActContainer = styled.div`
  display: flex;
  height: 100%;
  margin-top: 80px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    height: 30px;
    margin: 10px;
    padding: 10px;
    font-size: 15px;
    border: 1px solid none;
    border-radius: 100px;
    color: ${(props) => (props.page === 'set' ? 'balck' : 'white')};
    background-color: ${(props) => (props.page === 'act' ? '#e67e22' : null)};
  }
  cursor: pointer;
`;

const SetContainer = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  margin-top: 80px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    height: 30px;
    margin: 10px;
    padding: 10px;
    font-size: 15px;
    border: 1px solid none;
    border-radius: 100px;
    color: ${(props) => (props.page === 'set' ? 'white' : 'balck')};
    background-color: ${(props) => (props.page === 'set' ? '#e67e22' : null)};
  }
  cursor: pointer;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1000px;
  height: 100%;
  padding: 15px;

  .answers {
    display: flex;
    align-items: stretch;
    width: 450px;
    min-height: 100px;
    height: 450px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 5px;
    overflow: scroll;
  }
  .questions {
    display: flex;
    align-items: stretch;
    width: 450px;
    min-height: 100px;
    height: 450px;
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

const PublicInfoConatiner = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  width: 1000px;
  height: 100%;
  margin: 10px 0 15px 0;
  padding: 20px;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 3px;
  border-bottom: 1px solid hsl(210, 8%, 85%);
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 500px;
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  display: flex;
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

const EditBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  color: hsl(210, 8%, 40%);
  cursor: pointer;
  border: 1px solid hsl(210, 8%, 75%);
  :hover {
    background-color: hsl(210, 8%, 95%);
  }
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
const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 5px;
`;

const Text2 = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin: 0 0 5px 0;
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

const Text4 = styled.label`
  display: block;
  width: 100%;
  color: hsl(210, 8%, 55%);
  text-align: center;
`;

const Text5 = styled.label`
  margin: 0 0 3px 3px;
  width: 300px;
  font-size: 16px;
  font-weight: 700;
`;

const Text6 = styled.p`
  margin: 0 0 3px 3px;
  width: 950px;
  font-size: 16px;
  line-height: 35px;
`;

const Text7 = styled.p`
  margin: 0 0 3px 0;
  width: 950px;
  font-size: 16px;
  line-height: 35px;
  text-align: start;
`;
const Dot = styled.p`
  margin: 8px;
  width: 10px;
  font-size: 16px;
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
const SettingsTitle = styled.div`
  font-size: 28px;
  width: 950px;
  font-weight: 500;
  margin: 15px 0 25px 0;
  padding: 0 0 10px 0;
  border-bottom: 1px solid hsl(210, 8%, 85%);
`;

const SettingsSubTitle = styled.div`
  font-size: 22px;
  width: 1000px;
  margin: 10px 0 0 0;
`;

const Input = styled.input`
  width: 400px;
  height: 35px;
  padding: 8px 9px 8px 9px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  margin: 5px 0 15px 0;
`;

const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  border: 1px solid;
  border-radius: 5px;
  margin-right: 10px;
  margin: 8px;
`;

const SaveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 38px;
  padding: 8px 9px 8px 9px;
  background-color: hsl(206, 100%, 52%);
  border-radius: 3px;
  color: white;
  font-size: 15px;
  :hover {
    background-color: hsl(206, 100%, 42%);
    cursor: pointer;
  }
`;

const CancelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  margin: 6px 0 6px 7px;
  padding: 8px 9px 4px 9px;
  border: 1px solid;
  background-color: white;
  border-radius: 5px;
  color: hsl(206, 100%, 52%);
  font-size: 16px;
  :hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const DeleteBtn = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 38px;
  padding: 8px 9px 8px 9px;
  background-color: hsl(358, 62%, 52%);
  border-radius: 3px;
  border: none;
  color: white;
  font-size: 15px;
  margin: 15px 0 20px 0;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  :hover {
    background-color: hsl(358, 62%, 70%);
    cursor: pointer;
  }
`;
