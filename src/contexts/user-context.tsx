import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
interface CurrentUser {
  uid: string | null;
  displayName: string | null;
}
interface UserType {
  currentUser: null | CurrentUser;
  setCurrentUser: Dispatch<SetStateAction<null | CurrentUser>>;
}
const defaultCon: UserType = {
  currentUser: null,
  setCurrentUser: () => null,
};
export const UserContext = createContext(defaultCon);
interface UserProps {
  children: ReactNode;
}
export const UserProvider = (props: UserProps) => {
  const [currentUser, setCurrentUser] = useState<null | CurrentUser>(null);
  const value: UserType = { currentUser, setCurrentUser };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
