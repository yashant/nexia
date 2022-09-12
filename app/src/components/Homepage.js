import React from "react";
import styled from "styled-components";
import NavBar from '../components/navigation'
import PartyImg from '../asset/party.png';
import Hand from '../asset/hand.png';


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
    </>
  )
};

export default LoginPage;

const Hero = styled.div`
  display:flex;
  justify-content:center;
  width: 100%;
  height: 537px;
  background-color: black;
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

