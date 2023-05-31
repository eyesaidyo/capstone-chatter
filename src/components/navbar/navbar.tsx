import { NavButtonsWrap, NavLinksWrap, NavWrap } from "./navbar-styles"
import { Outlet , Link} from "react-router-dom"
export const NavBar=()=>{
  return (
    <>
      <NavWrap>
        <h1>CHATTER</h1>
        <NavLinksWrap>
          <Link to={'/'}>Home</Link>
          <Link to='about'>About Us</Link>
          <Link to='contact'>Contact</Link>
          <Link to='blogs'>Blogs</Link>
        </NavLinksWrap>
        <NavButtonsWrap>
          <button id="login">Log in</button>
          <button id='sign-up'>Sign up</button>
        </NavButtonsWrap>
      </NavWrap>
      <Outlet/>
    </>
  )
}