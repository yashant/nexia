import React from "react";
import styled from "styled-components";
import NavBar from '../components/navigation'
import PartyImg from '../asset/party.png';
import Hand from '../asset/hand.png';
import Dislike from '../asset/dislike.svg';
import Playlist from '../asset/playlist.svg';
import Search from '../asset/search.svg';
import Users from '../asset/users-icn.svg';


const LoginPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero>
        <HeroContent>
          <HeadLine> Become a part of every party you go to</HeadLine>
          <SubHeader> You’ll never have to listen to the music you don’t like</SubHeader>
          <FlexRow className="flexRow">
            <CodeInput className="primaryInput"> Enter the 6-digit code </CodeInput>
            <JoinButton className="primaryBtn"> Join Now</JoinButton>
          </FlexRow>
        </HeroContent>

        <img src={Hand} ></img>
      </Hero>

      <HowItWorks className="wrapperPadding">
        <Header> How it works?</Header>
        <FlexRowIcn className="flexRow">
          <FlexColumn class="flexColumn">
            <img src={Users} ></img>
            <Text>Create a party / Join a party</Text>
          </FlexColumn>
          <FlexColumn class="flexColumn">
            <img src={Search} ></img>
            <Text>Search for your
              favorite songs</Text>
          </FlexColumn>
          <FlexColumn class="flexColumn">
            <img src={Playlist} ></img>
            <Text>Add songs
              to your party’s queue</Text>
          </FlexColumn>
          <FlexColumn class="flexColumn">
            <img src={Dislike} ></img>
            <Text>Vote to skip
              the current song</Text>
          </FlexColumn>
        </FlexRowIcn>
      </HowItWorks>
    </>
  )
};

export default LoginPage;

const Hero = styled.div`
  display:flex;
  justify-content:center;
  width: 100%;
  height: 537px;
  background-color: #12171A;;
  background-image: url(${PartyImg});
`;
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:center;
  gap:20px;
  width:50%;
  z-index:5;
`;
const HeadLine = styled.h1`
  color: #C6BFC3;
`;
const Header = styled.h1`
  color: #12171A;;
  margin-bottom:80px;
`;

const SubHeader = styled.h4`
  color: #C6BFC3;
`;

const JoinButton = styled.div`
`;

const CodeInput = styled.div`
`;

const FlexRow = styled.div`
  gap: 20px;
`;
const FlexRowIcn = styled.div`
  justify-content: space-around;
`;

const FlexColumn = styled.div`
  gap: 20px;
`;

const Text = styled.div`
width:180px;
`;
const HowItWorks = styled.div`
  gap: 20px;
  text-align:center;
  background-color: #FFFEEE;
`;


