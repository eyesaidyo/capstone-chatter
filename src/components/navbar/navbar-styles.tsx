import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const NavWrap= styled.div`
&h1{
  width: fit-content;
}
width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #543ee0;
  padding: 15px;
`
export const NavLinksWrap= styled.div`
  display: flex;
  /* gap: 10px; */
`
export const NavLinkItem= styled(Link)`
text-decoration:none;
display: inline;
&:visited{
  color:inherit;
}
`

export const NavButtonsWrap = styled.div`
  display: flex;
  gap:15px;
`;
export const NavButtonItem= styled.button`
    padding: 10px ; 
    border: 1px solid #543ee0;
    border-radius: 15px;
    :hover{
      cursor: pointer;
    }
    &#login{
    background-color: #fff;
  } &#sign-up{
      background-color: #543ee0;
      color: #fff;
    }
`