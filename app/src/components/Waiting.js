import React from "react";
import styled from "styled-components";
import logo from '../asset/logo.svg';
import copy from '../asset/copy.svg'


const LoginPage = () => {
  return (
    <FlexColumn className="flexColumn">
      <img src={logo}></img>
      <NickName className="flexColumn">
        <NickNameLabel> Enter your nickname</NickNameLabel>
        <NickNameInput className="primaryInput"> Rocky Beatles </NickNameInput>
      </NickName>

      <WaitingText>Waiting for your host to start the party</WaitingText>

      <Members>
        <MemberTitle>
          Members (5)
        </MemberTitle>
        <MembersList>
          <MembersItem>
            Rocky Beatles (You)
          </MembersItem>
          <MembersItem>
            Panda Aqua
          </MembersItem>
          <MembersItem>
            Justin Wilde
          </MembersItem>
          <MembersItem>
            Red Floyd
          </MembersItem>
          <MembersItem>
            Pink Lantern
          </MembersItem>
        </MembersList>
      </Members>

      <Settings>
        <BorderBtm>
          <Flexrow>
            <Link>
              nexia.io/5423
            </Link>
            <Icon>
              <img src={copy}></img>
            </Icon>
          </Flexrow>
        </BorderBtm>
        <Flexrow>
          <SettingsItem>
            20
          </SettingsItem>
          <SettingsItem>
            Members List
          </SettingsItem>
        </Flexrow>
        <Flexrow>
          <SettingsItem>
            10
          </SettingsItem>
          <SettingsItem>
            Vote to skip songs
          </SettingsItem>
        </Flexrow>
        <Flexrow>
          <SettingsItem>
            01
          </SettingsItem>
          Songs per minute
        </Flexrow>

      </Settings >

    </FlexColumn >
  )
};

export default LoginPage;



const FlexColumn = styled.div`
  padding: 80px;
  gap: 80px;

`;
const Flexrow = styled.div`
  display:flex;
  padding: 16px 36px;
  justify-content: space-between;
  `;


const JoinButton = styled.div`
`;

const NickName = styled.div`
  gap:5px;
`;
const NickNameInput = styled.div`
`;
const NickNameLabel = styled.div`
`;

const WaitingText = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #70DCE3;
`;

const Members = styled.div`
  width: 40%;
  display:flex;
  justify-content:center;
  flex-direction:column;
  gap:16px;
`;

const MemberTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const MembersList = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  `;

const MembersItem = styled.div`
  background-color: rgb(113,219,227,0.1);
  padding:4px 16px;
  border-radius:48px;
`;

const Settings = styled.div`
  background-color: #12171A;
  border-radius: 16px;
  border: 2px solid #808080;
  width:40%;

`;

const SettingsItem = styled.div`
`;
const BorderBtm = styled.div`
  border-bottom: 1px solid #808080;
`;

const Link = styled.div`
`;

const Icon = styled.div`
`;