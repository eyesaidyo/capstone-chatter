import styled from "styled-components";
import bcg from '../../assets/bacg.svg'
export const LandingPageWrap= styled.div`
color:#fff;
height: 100%;
background-image: url(${bcg});

height: 100vh;
  & .text{
    background-color: rgba(0, 0, 0, 0.55);
    position:absolute ;
    width: 100%;
    height: inherit;
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
  & .align{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
  }
  & img{
    width: 100%;
    position: absolute;
    height: inherit;
    /* display: none; */
    
  }
  & h1{
    font-weight: 700;
    font-size: 3rem;
    margin-top: -200px;

  }
  & p{
    font-size: 1.5rem;
    font-weight:500;
    margin-top: 50px;
  }
  & button{
    background: #543EE0;
    border-radius: 8px;
    color: #fff;
    border: 1px solid #543EE0;
    width: 200px;
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
    margin-top:20px;
     :hover{
      background: rgb(0, 40, 90);
      cursor: pointer;
    }
  }
`