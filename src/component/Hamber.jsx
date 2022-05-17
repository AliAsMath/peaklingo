import styled from "styled-components";

const Button = styled.button`
  height: 25px;
  border: none;
  position: relative;
  background: transparent;
  cursor: pointer;
`;

const Lines = styled.div`
  width: 30px;
  height: 5px;
  border-radius: 5px;
  background: ${(props) => (props.isExpand ? "transparent" : "red")};
  transition: all 0.5s;

  &::before {
    content: "";
    width: 30px;
    height: 5px;
    border: none;
    background: red;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${(props) => props.isExpand && "rotate(45deg)"};
    transform-origin: top left;
    transition: all 0.5s;
  }

  &::after {
    content: "";
    width: 30px;
    height: 5px;
    border: none;
    background: red;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: ${(props) => props.isExpand && "rotate(-45deg)"};
    transform-origin: bottom left;
    transition: all 0.5s;
  }
`;

function Hamber({ isExpand, setIsExpand }) {
  return (
    <Button onClick={() => setIsExpand((prev) => !prev)}>
      <Lines isExpand={isExpand} />
    </Button>
  );
}

export default Hamber;
