import { NavButtonItem, NavButtonsWrap, NavLinkItem, NavLinksWrap, NavWrap } from "./navbar-styles"
import { Link, Outlet } from "react-router-dom"
export const NavBar=()=>{
  return (
    <>
      <NavWrap>
       <div> <h1>CHATTER</h1></div>
        <NavLinksWrap>
          <NavLinkItem to={'/'}>Home</NavLinkItem>
          <NavLinkItem to='about'>About Us</NavLinkItem>
          <NavLinkItem to='contact'>Contact</NavLinkItem>
          <NavLinkItem to='blogs'>Blogs</NavLinkItem>
        </NavLinksWrap>
        <NavButtonsWrap>
          <NavButtonItem id="login">Log in</NavButtonItem>
          <Link to={'/sign-up'}><NavButtonItem  id="sign-up">Sign up</NavButtonItem></Link>
        </NavButtonsWrap>
      </NavWrap>
      <Outlet/>
    </>
  )
}