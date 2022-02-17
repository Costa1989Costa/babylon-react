import styled from "styled-components";

const button = styled.div.attrs(({ x, y, radius }) => ({
  style: {
    transform: `translate(${x - radius}px, ${y - radius}px)`
  }
  
}))`
  cursor: grab;
  position: absolute;
  width: 89px;
  height: 89px;
  color: white;
  background:black;
  
  border-radius: 50%;
  &:hover {
    background-color:black;
    border-radius: 20%;
    width:10px
  }

  ${({ isDragging }) =>
    isDragging &&
    `
    opacity: 0.8;
    cursor: grabbing;
  `}
`;

export default button;
