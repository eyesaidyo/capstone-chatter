import { NavButtonItem, NavButtonsWrap, NavLinkItem, NavLinksWrap, NavWrap } from "./navbar-styles"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { signInWithGooglePopup } from "../../utils/firebase/firebase-utils"
export const NavBar=()=>{
  const navigate= useNavigate()
  function handleLogin(){
    signInWithGooglePopup()
    navigate('/dashboard')
  }
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
          <NavButtonItem id="login" onClick={handleLogin}>Log in</NavButtonItem>
          <Link to={'/sign-up'}><NavButtonItem  id="sign-up">Sign up</NavButtonItem></Link>
        </NavButtonsWrap>
      </NavWrap>
      <Outlet/>
    </>
  )
}