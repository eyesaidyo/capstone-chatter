import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user-context";
import { editPostsField } from "../../utils/firebase/firebase-utils";
import { CommentItem } from "../comment-item/comment-item";
import { Comments } from "../post-item/post-item";
import { CommentsFormWrap, CommentsWrap } from "./comment-section-styles";
interface CommentProps {
  postId: string | undefined;
  comments: Comments[];
}
export const CommentSection = (props: CommentProps) => {
  const { currentUser } = useContext(UserContext);
  const [commentVal, setCommentVal] = useState<Comments>({
    userName: currentUser?.displayName,
    comment: "",
  });

  const handleClick = async () => {
    console.log(currentUser);
    if (props.postId)
      editPostsField(props.postId, "comments", [...props.comments, commentVal]);
    // setCommentVal({ userName: "", comment: "" });
  };
  return (
    <CommentsWrap>
      <CommentsFormWrap>
        <textarea
          onChange={(e) => {
            let val = e.target.value;
            setCommentVal({ userName: currentUser?.displayName, comment: val });
          }}
          // value={commentVal.comment}
        />
        <button onClick={handleClick}>add comment</button>
      </CommentsFormWrap>
      {props.comments.map((p, idx) => (
        <CommentItem userName={p.userName} comment={p.comment} key={idx} />
      ))}
    </CommentsWrap>
  );
};
