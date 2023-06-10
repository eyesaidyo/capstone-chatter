import {useContext} from 'react'
import { UserContext } from '../../contexts/user-context'




export const Dashboard=()=>{
  const {currentUser, setCurrentUser} =useContext(UserContext)
  return <h1>hello {currentUser}</h1>
}