import styled from "styled-components";

export const AboutWrapper=styled.div`
display: flex;
margin-top: 80px;
padding: 30px;
& h3{
  font-size: 3rem;
  font-weight: 700;
}
& p{
  font-size: 18px;
}
  & .about{
    /* display: inline-block; */
    width: 65%;
    padding: 20px;
    margin-top: 0;
  }
  & .img{
    /* display: inline-block; */
    width: 35%;
    padding: 20px;
  }

`