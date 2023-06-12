import styled from "styled-components";

export const MenuWrap=styled.div`
  height: 100vh;
  position: fixed;
  overflow-y: hidden;
  width: 25%;
  display: flex;
  flex-direction: column;
  gap:20px;
  padding: 20px;
  & h1{
    margin-bottom: 30px;
  }
`
export const ItemWrap= styled.div`
font-size: 2rem;
  & img{
    width: 1.5rem;
    margin-right: 20px;
  }
`