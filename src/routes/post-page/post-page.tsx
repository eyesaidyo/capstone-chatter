import { PostPageWrap } from "./post-page-styles";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { editLikesField, getPost } from "../../utils/firebase/firebase-utils";
// import { Preview } from "../preview/Preview";
import { CommentSection } from "../../components/comment-section/comment-section";
import { CommentsContext } from "../../contexts/comments-context";
import { UserContext } from "../../contexts/user-context";
import { marked } from "marked";

//interface UserParams extends RouteComponentProps<{ postId: string }> {}
export const PostPage = () => {
  const { id } = useParams();
  const [val, setVal] = useState("");
  const [titleVal, setTitleVal] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const { setComments, likes, setLikes } = useContext(CommentsContext);
  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const post = await getPost(id);
        console.log(post);
        if (post) {
          setVal(post.content);
          setTitleVal(post.title);
          setComments(post.comments);
          setLikes(post.likes);
          if (post.likes.includes(currentUser?.uid)) {
            setIsLiked(true);
          }
          console.log(`VAL IS ${post.title}`);
        }
      }
    };
    fetchData();
  }, [id]);
  const handleLike = async () => {
    if (likes !== null && id) {
      await editLikesField(id, "likes", [...(likes || []), currentUser?.uid]);
      setLikes([...(likes || []), currentUser?.uid]);
      setIsLiked(true);
    }
  };
  const handleUnlike = async () => {
    if (likes !== null && id) {
      await editLikesField(id, "likes", [
        ...likes.filter((ids) => ids !== currentUser?.uid),
      ]);
      setLikes([...likes.filter((ids) => ids !== currentUser?.uid)]);
      setIsLiked(false);
    }
  };
  return (
    <>
      <PostPageWrap>
        <h1>{titleVal}</h1>
        <div dangerouslySetInnerHTML={{ __html: marked.parse(val) }}></div>
        <h3>Comments</h3>
        <hr />
        {isLiked ? (
          <button onClick={handleUnlike}>Unlike :(</button>
        ) : (
          <button onClick={handleLike}>Like :)</button>
        )}
        <CommentSection postId={id} />
      </PostPageWrap>
    </>
  );
};
export default PostPage;
