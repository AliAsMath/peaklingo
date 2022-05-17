import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  background: DarkSlateGrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterWrapper = styled.div`
  color: cyan;
  font-size: 50px;
`;

function Body() {
  const [counter, setCounter] = useState(7);

  useEffect(() => {
    console.log("done");
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev === 1) clearInterval(timer);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <CounterWrapper>{counter}</CounterWrapper>
    </Wrapper>
  );
}

export default Body;
