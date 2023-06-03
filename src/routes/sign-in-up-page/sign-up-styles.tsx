import styled from "styled-components";
import signIn from "../../assets/react.svg"
export const SignUpWrapper= styled.div`
   background-image: url(${signIn});
  display: flex;
  border: 2px solid red;
  height: 100%;
  & .left{
    background-image: url(${signIn});
    width: 40%;
  }
  .words{
    position: absolute;
    width: 100%;
    height: inherit;
  }
`