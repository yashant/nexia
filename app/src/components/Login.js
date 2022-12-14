import React from "react";
import styled from "styled-components";
import Headphone from '../asset/headphone.png';
import logo from '../asset/logo.svg';
//import Spotify from '../asset/spotify.svg';
import { ReactComponent as Spotify } from '../asset/spotify.svg';

const LoginPage = () => {
  return (
    <>
      <BodyContainer>
        <img src={logo}></img>
        We are excitied to get your party started!
        <Linking href="../waiting">
          <JoinButton className="secondaryBtn">  <Spotify /> Login with Spotify</JoinButton>
        </Linking>
      </BodyContainer>

    </>
  )
};

const BodyContainer = styled.div`
display:flex;
flex-direction:column;
gap:40px;
justify-content:center;
align-items:center;
width: 100%;
height: 100vh;
background-color: #12171A;;
background-image: url(${Headphone});
background-size: cover;
`;

const JoinButton = styled.div`
  width:100%;
  margin-top:-8px;
  gap:8px;
`;
const Linking = styled.a`
  width: 40%;
`;

export default LoginPage;

