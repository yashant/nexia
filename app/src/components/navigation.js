import React from "react";
import styled from "styled-components";
import logo from '../asset/logo.svg';

const NavigationBar = () => {
  return (
    <NavBar>
      <Wrapper className="wrapperPadding">
        <img src={logo}></img>
        <PrimaryBtn>
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
  cursor:pointer;
  border: 2px solid #70DCE3;
  width: 187px;
  height: 49px;
  border-radius: 50px;
  display:flex;
  justify-content: center;
  align-items:center;
  color:#70DCE3;
`;
const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
    width:100%;
`;