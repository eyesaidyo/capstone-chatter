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
    text-align: center;
  }
  & img{
    width: 100%;
    position: absolute;
    height: inherit;
    /* display: none; */
    
  }
  /* & h1{
    margin-top:500px ;

  } */
`