import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px;

  li {
    color: black;
    background: #ffd8be;
    opacity: 90%;
    box-shadow: 1px 1px 10px #ffd8be;
    border-radius: 10px;
    padding: 15px;
    font-family: "Fresca", sans-serif;
    font-size: 1.1rem;
  }

  .hidden {
    display: none;
  }
`;

export default StyledList;
