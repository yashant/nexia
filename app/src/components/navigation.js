import React from "react";
import styled from "styled-components";
import logo from '../asset/logo.svg';

const NavigationBar = () => {
  return (
    <NavBar>
      <Wrapper className="wrapperPadding">
        <img src={logo}></img>
        <PrimaryBtn className="secondaryBtn">
          Host a party
        </PrimaryBtn>
      </Wrapper>
    </NavBar>

  )
};

export default NavigationBar;

const NavBar = styled.div`
  width: 100%;
  height: 100px;
  background: #12171A;
  display:flex;
  align-items:center;
`;
const PrimaryBtn = styled.div`
 
`;
const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
    width:100%;
`;