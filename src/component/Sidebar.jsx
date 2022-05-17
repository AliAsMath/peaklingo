import { useState } from "react";
import styled from "styled-components";
import Hamber from "./Hamber";

const Wrapper = styled.menu`
  width: ${(props) => (props.isExpand ? "20%" : "50px")};
  background: ${(props) => (props.isExpand ? "rgb(0,0,0,0.4)" : "black")};
  height: 100%;
  padding: 10px 10px 0;
  position: absolute;
  left: 0;
  top: 0;
  transition: width 0.5s;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 10px;
  display: ${(props) => (props.isExpand ? "block" : "none")};
`;

function Sidebar() {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Wrapper isExpand={isExpand}>
      <Hamber isExpand={isExpand} setIsExpand={setIsExpand} />
      <List isExpand={isExpand}>
        <li>Home</li>
        <li>Login</li>
      </List>
    </Wrapper>
  );
}

export default Sidebar;
