import styled from "styled-components";

const StyledSearchBar = styled.form`
  display: flex;
  justify-content: center;
  background-color: #f6f6eb;
  margin: 0 5rem;
  opacity: 80%;
  box-shadow: 1px 1px 5px white;
  border-radius: 10px;
  padding: 10px 15px;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-top: 50px;

  span {
    color: black;
    font-family: "Fresca", sans-serif;
  }

  input {
    border: none;
    background-color: white;
    border-radius: 5px;
    padding: 10px 10px;
    margin: 5px;
    font-size: 1.1rem;
    box-shadow: 0px 0px 3px #888 inset;
    color: black;
    font-family: "Fresca", sans-serif;
  }
`;

export default StyledSearchBar;
