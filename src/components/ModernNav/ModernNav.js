import React, { useState } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import man from "../../assets/images/AbhishekIyengar.png";


const Master = styled.div`
  overflow: hidden;
  position: relative;
  width:100%;
  height: 100vh;
  background: #5a32a0;
  text-align: center;
`;

const openStyles = css`
  transform: translateX(110px) scale(0.85);
`;

const Content = styled.div`
  height: 800px;
  padding: 2rem 1.5rem;
  border-radius: 40px;
  background: #210f40;
  transform: translateX(0) scale(1);
  transition: 0.45s;
  ${(p) => p.open && openStyles};
`;

const colorText = rgba("white", 0.85);
const colorSubtitle = rgba("white", 0.75);

const Subtitle = styled.div`
  color: ${colorSubtitle};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const Title = styled.div`
  color: ${colorText};
  font-size: 2.4rem;
  margin-bottom: 20px;
*`;

const Avatar = styled.img`
  width: 30%;
  height: 50%;
  border-radius: 100%;
`;

const Burger = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  font-size: 36px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorText};
  outline: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 2%;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  padding: 0 1rem;
  border: 0;
  background: transparent;
  color: ${colorSubtitle};
  cursor: pointer;
  &:hover {
    color: ${colorText};
  }
`;

const NavIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 20px;
`;

const NavText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color:white;
`;

const ModernNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Master>
      <Nav>
        <NavButton>
          <NavIcon className="uil uil-home" />
          <a href="/"><NavText>Home</NavText></a>
        </NavButton>
        <NavButton>
          <NavIcon className="uil uil-cloud-info" />
          <NavText>About</NavText>
        </NavButton>
        <NavButton>
          <NavIcon className="uil uil-notes" />
          <NavText>Docs</NavText>
        </NavButton>
        <NavButton>
          <NavIcon className="uil uil-sign-out-alt" />
          <NavText>Logout</NavText>
        </NavButton>
      </Nav>
      <Content open={open}>
        <Burger onClick={() => setOpen(!open)} className="uil uil-bars" />
        <Subtitle>Welcome Back</Subtitle>
        <Title>Abhishek Iyengar</Title>
        <Avatar src={man} />
      </Content>
    </Master>
  );
};

export default ModernNav;