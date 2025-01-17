import {
  NavButtonItem,
  NavButtonsWrap,
  NavLinkItem,
  NavLinksWrap,
  NavWrap,
} from "./navbar-styles";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { signInWithGooglePopup } from "../../utils/firebase/firebase-utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import img from "../../assets/hamburger.png";
import { ModalContext } from "../../contexts/modal-context";
export const NavBar = () => {
  const { setCurrentUser } = useContext(UserContext);
  const { setModal, setIsModalClosed } = useContext(ModalContext);
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const { user } = (await signInWithGooglePopup()) as {
        user: any;
        token: string | undefined;
      };
      setCurrentUser({ uid: user.uid, displayName: user.displayName });
      console.log(`nav--currenUser is ${user.uid}`);
      if (user.uid) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
    // currentUser?.uid && navigate("/dashboard");
  }

  return (
    <>
      <NavWrap>
        <h1>CHATTER</h1>

        <NavLinksWrap>
          <NavLinkItem to={"/"}>Home</NavLinkItem>
          <NavLinkItem to="about">About Us</NavLinkItem>
          <NavLinkItem to="contact">Contact</NavLinkItem>
          <NavLinkItem to="blogs">Blogs</NavLinkItem>
        </NavLinksWrap>
        <NavButtonsWrap>
          <NavButtonItem id="login" onClick={handleLogin}>
            Log in
          </NavButtonItem>
          <Link to={"/sign-up"}>
            <NavButtonItem id="sign-up">Sign up</NavButtonItem>
          </Link>
        </NavButtonsWrap>
        {/* {!modal && ( */}
        <>
          <img
            src={img}
            className="hamburger"
            onClick={() => {
              setModal(true);
              setIsModalClosed(true);
            }}
          />
        </>
      </NavWrap>
      <Outlet />
    </>
  );
};
