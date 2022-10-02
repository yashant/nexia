import React from "react";
import styled from "styled-components";
import Headphone from '../asset/headphone.png';
import logo from '../asset/logo.svg';


const LoginPage = () => {
  return (
    <>
      <BodyContainer>
        <img src={logo}></img>
        Please enter the 6 digit code provided by your host.
        <CodeInput className="primaryInput"> Enter the 6-digit code </CodeInput>
        <Linking href="../waiting">
          <JoinButton className="primaryBtn"> Join a Party</JoinButton>
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
const CodeInput = styled.div`
  width:40%;
  margin-bottom:-8px;
`;
const JoinButton = styled.div`
  width:100%;
  margin-top:-8px;
`;

const Linking = styled.a`
  width: 40%;
`;

export default LoginPage;

