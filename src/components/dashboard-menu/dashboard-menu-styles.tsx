import styled from "styled-components";

export const MenuWrap = styled.div`
  color: #543ee0;
  height: 100vh;
  /* position: fixed; */
  overflow-y: hidden;
  width: 317px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-right: 1px solid #1e1e1e;

  & h1 {
    margin-bottom: 30px;
  }
  & button {
    padding: 10px;
    color: #fff;
    background-color: #543ee0;
    border: 1px #543ee0;
    border-radius: 8px;
    :hover {
      cursor: pointer;
    }
  }
  & .logout {
    color: red;
    :hover {
      cursor: pointer;
    }
  }
`;
export const ItemWrap = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: baseline;
  & img {
    width: 1.5rem;
    margin-right: 20px;
    /* align-self: baseline; */
  }
`;
