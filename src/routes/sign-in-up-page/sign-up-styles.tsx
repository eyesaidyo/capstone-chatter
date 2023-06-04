import styled from "styled-components";
import signIn from "../../assets/sign-in.svg"
export const SignUpWrapper= styled.div`
  box-sizing: border-box;
  background-image: url(${signIn});
  display: inline-block;
  color: #fff;
  font-size:1.5rem;
  /* border: 2px solid red; */
  height: 100vh;
  width: 45%;
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  & .left{
    width: 40%;
  }
  .words{
    position: absolute;
    width: 45%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    padding: 200px 50px;
  }
`
export const FormWrapper=styled.div`
  display: inline-block;
  width: 55%;
  padding: 100px;
   .create{
    background-color: #543ee0;
    color: #fff;
  }
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 10px 0;
    padding: 5px;
  }
  button img{
    width: 24px;
  }
`
export const SUPageWrapper = styled.div`
  display: flex;
`