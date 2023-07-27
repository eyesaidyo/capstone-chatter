import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";
import { Comments } from "../components/post-item/post-item";

interface CommentsType {
  comments: Comments[] | null;
  setComments: Dispatch<SetStateAction<null | Comments[]>>;
  likes: (string | null | undefined)[] | null;
  setLikes: Dispatch<SetStateAction<null | (string | null | undefined)[]>>;
}
const defaultCon: CommentsType = {
  comments: [],
  setComments: () => [],
  likes: [],
  setLikes: () => [],
};
interface DraftsProps {
  children: ReactNode;
}
export const CommentsContext = createContext(defaultCon);
export const CommentsProvider = (props: DraftsProps) => {
  const [comments, setComments] = useState<Comments[] | null>([]);
  const [likes, setLikes] = useState<(string | null | undefined)[] | null>([]);
  const val: CommentsType = { comments, setComments, likes, setLikes };
  return (
    <CommentsContext.Provider value={val}>
      {props.children}
    </CommentsContext.Provider>
  );
};
