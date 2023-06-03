import { FormWrapper, SignUpWrapper, SUPageWrapper } from "./sign-up-styles"

export const SignUpPage=()=>{
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
            <button>Create account</button>
          </form>
          <button>Sign up with Google</button>
        </FormWrapper>
      </SUPageWrapper>
   
  )
}