import styled from "styled-components";

export const SearchWrap = styled.div`
  /* display: flex; */
  padding: 3px;
  border-radius: 8px;
  border: 1px solid #cdcdcd;
  width: 50%;
  margin-top: 20px;
  & input {
    font-size: 1.5rem;
    border: none;
    :focus {
      outline: none;
    }
  }
`;
