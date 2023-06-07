import { FormWrapper, SignUpWrapper, SUPageWrapper } from "./sign-up-styles"
import googleIcon from '../../assets/google.svg'
import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase-utils"
export const SignUpPage=()=>{
  const signUp= async ():Promise<void>=>{
    console.log('ff')
    const {user} =await signInWithGooglePopup()
    
    createUserDocFromAuth(user)
  }
  return (
    <SUPageWrapper>
     <SignUpWrapper>
        <div className="left">
          <div className="words">
            <h1>CHATTER</h1>
            <p>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
          </div>
        </div>
       
      </SignUpWrapper>
      <FormWrapper>
          <form>
            <label >name</label>
            <input id="name" type={'text'}></input>
            <label >email</label>
            <input id="name" type={'text'}></input>
            <label >password</label>
            <input id="name" type={'text'}></input>
            <label >confirm password</label>
            <input id="name" type={'text'}></input>
            <button className="create">Create account</button>
          </form>
          <button onClick={signUp}><img src={googleIcon}/>Sign up with Google</button>
        </FormWrapper>
      </SUPageWrapper>
   
  )
}