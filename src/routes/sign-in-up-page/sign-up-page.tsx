import { FormWrapper, SignUpWrapper, SUPageWrapper } from "./sign-up-styles";
import googleIcon from "../../assets/google.svg";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase-utils";
import { UserContext } from "../../contexts/user-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const SignUpPage = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signUp = async (): Promise<void> => {
    const { user } = (await signInWithGooglePopup()) as {
      user: any;
      token: string | undefined;
    };

    createUserDocFromAuth(user);
    setCurrentUser({ uid: user.uid, displayName: user.displayName });
    console.log(` currentuser is ${currentUser}`);
    navigate("/dashboard");
  };

  return (
    <SUPageWrapper>
      <SignUpWrapper>
        <div className="left">
          <div className="words">
            <h1>CHATTER</h1>
            <p>
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
          </div>
        </div>
      </SignUpWrapper>
      <FormWrapper>
        <form>
          <label>name</label>
          <input id="name" type={"text"}></input>
          <label>email</label>
          <input id="name" type={"text"}></input>
          <label>password</label>
          <input id="name" type={"text"}></input>
          <label>confirm password</label>
          <input id="name" type={"text"}></input>
          <button className="create">Create account</button>
        </form>
        <button onClick={signUp}>
          <img src={googleIcon} />
          Sign up with Google
        </button>
      </FormWrapper>
    </SUPageWrapper>
  );
};
