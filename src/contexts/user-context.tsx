import { createContext, Dispatch, ReactNode, SetStateAction, useState,  } from "react";
interface User{
 currentUser: null;
 setCurrentUser: Dispatch<SetStateAction<null>>;

}
const defaultCon:User={
    currentUser: null,
    setCurrentUser: ()=>null,

}
export const UserContext = createContext(defaultCon);
interface UserProps{
  children:ReactNode
}
export const UserProvider = (props:UserProps) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};