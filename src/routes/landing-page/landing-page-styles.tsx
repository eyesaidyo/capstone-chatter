import styled from "styled-components";
import bcg from '../../assets/bacg.svg'
export const GetStartedWrap= styled.div`
color:#fff;
height: 100%;
background-image: url(${bcg});

height: 100vh;
  & .text{
    background-color: rgba(0, 0, 0, 0.55);
    position:absolute ;
    width: 100%;
    height: inherit;
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
      background: rgb(0, 40, 90, 0.33);
      cursor: pointer;
    }
  }
`
export const WhyJoinWrapper= styled.div`
padding: 50px 11%;
text-align: center;
  & .boxes{
    margin-top: 60px;
    display: flex;
    gap: 15px;
  }
  & h2{
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 33px;
}
& p{
  font-size: 18px;
}
`
export const ReviewWrapper=styled.div`
background: rgba(255, 237, 204, 0.5);
display: flex;
padding: 150px 10%;
margin-left:auto;
margin-right: auto;
gap: 30px;
  & img{
    border-radius: 50%;
  }
  & .img{
    width: 30%;
    display: inline-block;
  }
  & button{
    background: #543EE0;
    border-radius: 8px;
    color: #fff;
    border: 1px solid #543EE0;
    width: 150px;
    text-align: center;
    padding: 10px;
    font-size: 1.2rem;
    margin-top:20px;
     :hover{
      background: rgb(0, 40, 90, 0.33);
      cursor: pointer;
    }
  }
  & .rev{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`