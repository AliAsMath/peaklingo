import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 70px;
  background: DarkCyan;
  display: flex;
  justify-content: center;
  align-items: center;
  color: cyan;
  font-size: 50px;
  font-weight: 600;
`;

function Footer() {
  return <Wrapper>Footer</Wrapper>;
}

export default Footer;
