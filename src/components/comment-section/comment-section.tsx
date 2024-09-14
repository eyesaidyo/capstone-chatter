import { useContext, useState } from "react";
import { CommentsContext } from "../../contexts/comments-context";
import { UserContext } from "../../contexts/user-context";
import { editPostsField } from "../../utils/firebase/firebase-utils";
import { CommentItem } from "../comment-item/comment-item";
import { Comments } from "../post-item/post-item";
import { CommentsFormWrap, CommentsWrap } from "./comment-section-styles";
interface CommentProps {
  postId: string | undefined;
}
export const CommentSection = (props: CommentProps) => {
  const { comments, setComments } = useContext(CommentsContext);
  const { currentUser } = useContext(UserContext);
  const [commentVal, setCommentVal] = useState<Comments>({
    userName: currentUser?.displayName,
    comment: "",
  });
  console.log(`user is ${currentUser?.displayName}`);
  const handleClick = async () => {
    console.log(currentUser);
    if (Array.isArray(comments) && props.postId) {
      await editPostsField(props.postId, "comments", [...comments, commentVal]);
      setComments([...comments, commentVal]);
      setCommentVal({ userName: "", comment: "" });
    }
  };
  return (
    <CommentsWrap>
      <CommentsFormWrap>
        <textarea
          value={commentVal.comment}
          onChange={(e) => {
            let val = e.target.value;
            setCommentVal({ userName: currentUser?.displayName, comment: val });
          }}
          placeholder="Your comment here..."
        />
        <button onClick={handleClick}>add comment</button>
      </CommentsFormWrap>
      {comments &&
        comments.map((p, idx) => (
          <CommentItem userName={p.userName} comment={p.comment} key={idx} />
        ))}
    </CommentsWrap>
  );
};
