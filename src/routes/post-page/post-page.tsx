import { PostPageWrap } from "./post-page-styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "../../utils/firebase/firebase-utils";
import { Preview } from "../preview/Preview";
import { CommentSection } from "../../components/comment-section/comment-section";

//interface UserParams extends RouteComponentProps<{ postId: string }> {}
const PostPage = () => {
  const { id } = useParams();
  const [val, setVal] = useState("");
  const [titleVal, setTitleVal] = useState("");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const post = await getPost(id);
        console.log(post);
        if (post) {
          setVal(post.content);
          setTitleVal(post.title);
          setComments(post.comments);
          console.log(`VAL IS ${post.title}`);
        }
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <PostPageWrap>
        <h1>post page {id}</h1>
        <Preview val={val} title={titleVal} />
        <h3>Comments</h3>
        <hr />
        <CommentSection postId={id} comments={comments} />
      </PostPageWrap>
    </>
  );
};
export default PostPage;
