import { AboutSection } from "../../components/about/about-section";
import { Box } from "../../components/box/box";
import {
  CTAWrap,
  Footer,
  GetStartedWrap,
  ReviewWrapper,
  WhyJoinWrapper,
} from "./landing-page-styles";
import analyticsIcon from "../../assets/analytics.svg";
import content from "../../assets/content.svg";
import socials from "../../assets/socials.svg";
import review from "../../assets/review.svg";
import stock1 from "../../assets/stock1.svg";
import stock2 from "../../assets/stock2.svg";
import stock3 from "../../assets/stock3.svg";
import close from "../../assets/close icon.svg";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modal-context";
import { NavLinkItem } from "../../components/navbar/navbar-styles";
import { UserContext } from "../../contexts/user-context";
import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup } from "../../utils/firebase/firebase-utils";
// import bcg from '../../assets/bacg.svg'

export const LandingPage = () => {
  const { modal, setModal, isModalClosed, setIsModalClosed } =
    useContext(ModalContext);
  // const [isModalClosed, setIsModalClosed] = useState(false);
  const closeModal = () => {
    setTimeout(() => {
      setIsModalClosed(false);
    }, 300);
    setModal(false);
    //
  };
  const { setCurrentUser } = useContext(UserContext);
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
      {isModalClosed && (
        <div className={`modal ${modal ? "closemod" : "openmod"}`}>
          <div className="closeWrap">
            <div className="closeButton" onClick={closeModal}>
              <img src={close} />
            </div>
          </div>

          <div className="links">
            <NavLinkItem to={"/"}>
              <h3>home</h3>
            </NavLinkItem>
            <NavLinkItem to={"about"}>
              <h3>about us</h3>
            </NavLinkItem>
            <NavLinkItem to={"contact"}>
              <h3>contact</h3>
            </NavLinkItem>
            <NavLinkItem to={"blogs"}>
              <h3>blogs</h3>
            </NavLinkItem>
            <div className="buttons">
              <button
                id="login"
                className="logIn"
                onClick={() => handleLogin()}
              >
                Log in
              </button>
              <button id="sign-up" className="signUp">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}

      <GetStartedWrap>
        <div className="text">
          <div className="align">
            <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
            <p>
              Unleash the Power of Words. Connect with Like-Minded Readers and
              Writers
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </GetStartedWrap>
      <AboutSection />
      <WhyJoinWrapper>
        <h2>Why you should join chatter</h2>
        <p>
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people.
        </p>
        <div className="boxes">
          <Box
            imgSrc={analyticsIcon}
            heading="Analytics"
            detail="Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time"
          />
          <Box
            imgSrc={socials}
            heading="Social interactions"
            detail="Users on the platform can interact with posts they like, comment and engage in discussions"
          />
          <Box
            imgSrc={content}
            heading="Content creation"
            detail="Write nice and appealing with our in-built markdown, a rich text editor"
          />
        </div>
      </WhyJoinWrapper>
      <ReviewWrapper>
        <div className="img">
          <img src={review} />
        </div>
        <div className="rev">
          <em>
            "Chatter has become an integral part of my online experience. As a
            user of this incredible blogging platform, I have discovered a
            vibrant community of individuals who are passionate about sharing
            their ideas and engaging in thoughtful discussions.”
          </em>
          <p>
            <strong>Adebobola Muhydeen, </strong>{" "}
            <em>Software developer at Apple</em>
          </p>
          <button>Join Chatter</button>
        </div>
      </ReviewWrapper>
      <CTAWrap>
        <div className="img-wrap">
          <img src={stock1} />
          <img className="two" src={stock2} />
          <img src={stock3} />
        </div>
        <div className="cta">
          <h1>Write, read and connect with great minds on chatter</h1>
          <p>
            Share people your great ideas, and also read write-ups based on your
            interests. connect with people of same interests and goals.
          </p>
          <button>Get started</button>
        </div>
      </CTAWrap>
      <Footer>
        <h1>CHATTER</h1>
        <div className="cluster">
          <h3>Explore</h3>
          <p>Community</p>
          <p>Trending Blogs</p>
          <p>Chatter for teams</p>
        </div>
        <div className="cluster">
          <h3>Support</h3>
          <p>Support docs</p>
          <p>Join slack</p>
          <p>Contact for teams</p>
        </div>
        <div className="cluster">
          <h3>Official blog</h3>
          <p>Official blog</p>
          <p>Engineering blogs</p>
        </div>
      </Footer>
    </>
  );
};
