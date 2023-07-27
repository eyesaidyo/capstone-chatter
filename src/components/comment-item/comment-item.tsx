import { Comments } from "../post-item/post-item";
import { CommentItemWrap } from "./comment-item-styles";

export const CommentItem = (props: Comments) => {
  return (
    <CommentItemWrap>
      <h5>{props.userName}</h5>
      <p>{props.comment}</p>
    </CommentItemWrap>
  );
};
