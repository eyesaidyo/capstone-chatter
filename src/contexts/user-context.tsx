import { createContext, Dispatch, ReactNode, SetStateAction, useState,  } from "react";
interface User{
 currentUser: null|string;
 setCurrentUser: Dispatch<SetStateAction<null|string>>;

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
  const [currentUser, setCurrentUser] = useState<null|string>(null);
  const value:User = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};